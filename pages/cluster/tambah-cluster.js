import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

function TambahCluster(props) {
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

    return (
        <div>
            <Navbar cluster />
            <div className='container'>
                <h2 style={{ paddingTop: 20, textAlign: 'center' }}>Tambah Data Cluster</h2>
                <div style={{ paddingTop: 20 }}>
                    <form>
                        <div>
                            <h5>Nama Cluster</h5>
                            <input className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h5>Lokasi Cluster</h5>
                            <input className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h5>Jumlah Rumah</h5>
                            <input className='form-control' placeholder='Ketik disini ....' />
                        </div>

                        <div style={{paddingTop:10}}>
                            <button className='btn btn-outline-primary' style={{width:'100%'}} type='submit'>Simpan</button>
                        </div>
                        <div style={{paddingTop:10}}>
                            <a href='/cluster' className='btn btn-outline-danger' style={{width:'100%'}}>Kembali</a>
                        </div>

                        <div>
                            <a type='button' className={"btn btn-outline-primary"} style={{ marginTop: 20 }} data-bs-toggle="modal" data-bs-target="#exampleModal">Tambah Foto Cluster</a>

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
                                                    <input type={"text"} placeholder='Ketik disini ....' className='form-control' />
                                                </div>
                                                <div style={{ paddingTop: 10 }}>
                                                    <label>Foto Cluster :</label>
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
                            <div>
                                <table class="table table-stripped">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Judul</th>
                                            <th scope="col">Foto Cluster</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
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
        </div>
    );
}

export default TambahCluster;