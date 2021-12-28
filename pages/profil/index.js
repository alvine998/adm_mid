import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'


export default function Profil(props) {

    useEffect(() => {
    }, [])

    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(null);
    const [collection, setCollection] = useState([]);

    const onChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img);
            setImageName(URL.createObjectURL(img));
        }
    }

    return (
        <div>
            <Navbar profil />
            <div className='container'>
                <h2 style={{ textAlign: "center" }}>Input Profil Midland</h2>
                <form style={{ paddingBottom: 30 }}>
                    <div>
                        <h5>Nama Perusahaan</h5>
                        <input className='form-control' placeholder='Ketik disini ....' type={"text"} />
                    </div>
                    <div style={{ paddingTop: 20 }}>
                        <h5>Deskripsi Perusahaan</h5>
                        <textarea className='form-control' rows={4} placeholder='Ketik disini ....' type={"text"} />
                    </div>
                    <div style={{ paddingTop: 20 }}>
                        <h5>Alamat Perusahaan</h5>
                        <textarea className='form-control' rows={2} placeholder='Ketik disini ....' type={"text"} />
                    </div>
                    <div style={{ paddingTop: 20 }}>
                        <h5>Logo Perusahaan</h5>
                        <input className='form-control' placeholder='Ketik disini ....' type={"file"} />
                    </div>
                    <div style={{ paddingTop: 20 }}>
                        <h5>Visi Perusahaan</h5>
                        <input className='form-control' placeholder='Ketik disini ....' type={"text"} />
                    </div>
                    <div style={{ paddingTop: 20 }}>
                        <h5>Misi Perusahaan</h5>
                        <input className='form-control' placeholder='1. ' type={"text"} />
                        <input className='form-control' placeholder='2. ' type={"text"} />
                        <input className='form-control' placeholder='3. ' type={"text"} />
                        <input className='form-control' placeholder='4. ' type={"text"} />
                        <input className='form-control' placeholder='5. ' type={"text"} />
                    </div>
                    <div style={{ paddingTop: 20 }}>
                        <h5>Sejarah Perusahaan</h5>
                        <textarea className='form-control' rows={6} placeholder='Ketik disini ....' type={"text"} />
                    </div>
                    <div style={{paddingTop:10}}>
                        <button type='submit' className='btn btn-outline-primary' style={{width:'100%'}}>Simpan</button>
                    </div>
                    {/* Penghargaan */}
                    <div style={{ paddingTop: 20 }}>
                        <h5>Penghargaan Perusahaan</h5>
                        <div>
                            <a type='button' className={"btn btn-outline-primary"} style={{ marginTop: 20 }} data-bs-toggle="modal" data-bs-target="#exampleModal">Tambah Foto Penghargaan</a>

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Tambah Penghargaan</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form className='form'>
                                                <div>
                                                    <label>Foto Penghargaan :</label>
                                                    <input type={"file"} placeholder='Ketik disini ....' className='form-control' onChange={onChangeImage} />
                                                    <img style={{ marginTop: 10, width: 200, height: 100, marginLeft: 130 }} src={imageName} />
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
                                        <th scope="col">No</th>
                                        <th scope="col">Gambar</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Otto</td>
                                        <td><button className='btn btn-outline-danger'>Hapus</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
