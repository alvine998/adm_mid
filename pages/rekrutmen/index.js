import React from 'react';
import Navbar from '../../components/Navbar';

function Rekrutmen(props) {
    return (
        <div>
            <Navbar rekrut />

            <div className='container'>
                <h2 style={{ paddingTop: 20, textAlign: 'center' }}>Info Rekrutmen Midland Properti</h2>
                <div style={{ paddingTop: 20 }}>
                    <a className='btn btn-outline-primary' href='/rekrutmen/tambah-lowongan'>Tambah Lowongan Karir</a>
                    <div>
                        <table class="table table-stripped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama Pekerjaan</th>
                                    <th scope="col">Detail Pekerjaan</th>
                                    <th scope="col">Persyaratan</th>
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

export default Rekrutmen;