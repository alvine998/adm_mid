import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css';
import swal from 'sweetalert';

export default function Banner(props) {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(null);
    const [judul, setJudul] = useState('');
    const [collection, setCollection] = useState([]);

    const onChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img);
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
        formdata.append("images", image)

        axios.post('http://localhost:4000/resources/upload', formdata).then(
            res => {
                console.log(res.data)
            }
        )
    }

    const saveBanner = () => {
        const data = {
            judul: judul,
            images: image.name
        }

        console.log(data)

        axios.post('http://localhost:4000/banners', data).then(
            res => {
                console.log(res.data);
                setImage(null);
                swal("Sukses Simpan Banner", {icon:'success'})
            }
        )
    }

    useEffect(() => {
        getDataBanner();
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
                                            <input type={"text"} onChange={handleJudul} placeholder='Ketik disini ....' className='form-control' />
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
                                    <button type="button" class="btn btn-primary" onClick={saveBanner}>Save changes</button>
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
                                        <td>{res.judul}</td>
                                        <td>{res.images}</td>
                                        <td><button className='btn btn-outline-danger'>Hapus</button></td>
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
