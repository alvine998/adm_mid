import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css';
import FormData from 'form-data';
import swal from 'sweetalert';
import { useRouter } from 'next/router';

Banner.title = 'Banner';

export default function Banner(props) {
    const [images, setImages] = useState(null);
    const [imageName, setImageName] = useState(null);
    const [judul, setJudul] = useState('');
    const [collection, setCollection] = useState([]);

    const router = useRouter();
    const getSession = () => {
        var emails = localStorage.getItem("emailKey")
        if(emails == null){
            router.push('/')
        } else {
            console.log("Session :",emails)
        }
    }

    const onChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImages(img);
            setImageName(URL.createObjectURL(img));
        }
    }

    const handleJudul = (e) => {
        setJudul(e.target.value)
    }

    const getDataBanner = () => {
        axios.get(`http://localhost:4000/banners`).then(
            res => {
                const collection = res.data;
                setCollection(collection)
            }
        )
    }

    const saveImage = () => {
        let formdata = new FormData();
        formdata.append("image", images)

        axios.post('http://localhost:4000/uploads', formdata).then(
            res => {
                console.log(res.data)
            }
        )
    }

    const saveBanner = () => {
        const imagess = images.name;
        const data = {
            nama: judul,
            image: 'image_' + imagess
        }

        console.log(data)

        axios.post('http://localhost:4000/banners', data).then(
            res => {
                console.log(res.data);
                setImages(null);
                setJudul("");
                getDataBanner();
                swal("Sukses Simpan Banner", {icon:'success'})
            }
        )
    }

    const deleteBanner = (id) => {
        axios.delete(`http://localhost:4000/banners/${id}`).then(
            res => {swal("Sukses Hapus Banner", {icon:'success'}); getDataBanner();}
        )
    }

    useEffect(() => {
        getDataBanner();
        getSession();
    }, [])

    return (
        <div>
            <Navbar banner />

            <div className='container'>
                <h2 className={styles.centeringText}>Banner Website Midland Properti</h2>
                <div>
                    <a type='button' className={"btn btn-outline-primary"} style={{ marginTop: 20 }} data-bs-toggle="modal" data-bs-target="#exampleModal">Tambah Banner</a>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Tambah Banner</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form className='form'>
                                        <div>
                                            <label>Judul :</label>
                                            <input type={"text"} value={judul} onChange={handleJudul} placeholder='Ketik disini ....' className='form-control' />
                                        </div>
                                        <div style={{ paddingTop: 10 }}>
                                            <label>Gambar Banner :</label>
                                            <input type={"file"} placeholder='Ketik disini ....' className='form-control' onChange={onChangeImage} />
                                            <img style={{ marginTop: 10, width: 200, height: 100, marginLeft: 130 }} src={imageName} />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => {saveBanner();saveImage()}}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <table class="table table-stripped">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Judul</th>
                                <th scope="col">Gambar</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                collection.reverse().map((res, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{res.nama}</td>
                                        <td><img src={`http://localhost:4000/resources/upload/${res.image}`} style={{width:400, height:100, paddingLeft:190}} /></td>
                                        <td><button className='btn btn-outline-danger' onClick={() => deleteBanner(res._id)}>Hapus</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
