import React from 'react';
import Navbar from '../../components/Navbar';

function Kontak(props) {
    return (
        <div>
            <Navbar kontak />

            <div className='container'>
                <div>
                    <h2 style={{textAlign:'center', paddingTop:20}}>Kontak Midland Properti</h2>
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
                                                <label>Nama :</label>
                                                <input type={"text"}  placeholder='Ketik disini ....' className='form-control' />
                                            </div>
                                            <div style={{ paddingTop: 10 }}>
                                                <label>Nomor Telpon :</label>
                                                <input type={"text"}  placeholder='Ketik disini ....' className='form-control' />
                                            </div>
                                            <div style={{ paddingTop: 10 }}>
                                                <label>Email :</label>
                                                <input type={"email"}  placeholder='Ketik disini ....' className='form-control' />
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
                                    <th scope="col">Nama</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">No Telpon</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><button className='btn btn-outline-danger'>Hapus</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kontak;