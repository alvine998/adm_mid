import React from 'react'
import Navbar from '../../components/Navbar'

Cluster.title="Master Data Cluster"

export default function Cluster() {
    return (
        <div>
            <Navbar cluster />

            <div className='container'>
                <h2 style={{ paddingTop: 20, textAlign: 'center' }}>Master Data Cluster</h2>
                <div style={{ paddingTop: 20 }}>
                    <a className='btn btn-outline-primary' href='/cluster/tambah-cluster'>Tambah Cluster</a>
                    <div>
                        <table class="table table-stripped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama Cluster</th>
                                    <th scope="col">Lokasi</th>
                                    <th scope="col">Jumlah Rumah</th>
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
    )
}


