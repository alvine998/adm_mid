import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import styles from '../../styles/Home.module.css';

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

    }

    useEffect(() => {

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
                                        <div style={{paddingTop:10}}>
                                            <label>Gambar Banner :</label>
                                            <input type={"file"} placeholder='Ketik disini ....' className='form-control' onChange={onChangeImage} />
                                            <img style={{marginTop:10, width:200, height:100, marginLeft:130}} src={imageName} />
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <table class="table table-stripped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
