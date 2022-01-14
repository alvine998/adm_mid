import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import Navbar from '../../components/Navbar'

Cluster.title = "Master Data Cluster"

export default function Cluster() {

    const getSession = () => {
        var emails = localStorage.getItem("emailKey")
        if(emails == null){
            router.push('/')
        } else {
            console.log("Session :",emails)
        }
    }

    const [collection, setCollection] = useState([]);

    const getDataCluster = () => {
        axios.get(`http://localhost:4000/clusters`).then(
            res => {
                console.log(res.data);
                const collection = res.data;
                setCollection(collection)
            }
        )
    }

    useEffect(() => {
        getDataCluster();
        getSession();
    }, [])

    const deleteCluster = (id) => {
        axios.delete(`http://localhost:4000/clusters/${id}`).then(
            res => {
                swal("Berhasil Hapus Cluster", {icon:'success'});
                getDataCluster();
            }
        )
    }

    const router = useRouter();

    const dataCluster = (id) => {
        localStorage.setItem('clusterKey', id)
    }

    const editCluster = (id) => {
        dataCluster(id);
        router.push(`/cluster/tambah-cluster?id=${id}`)
    }

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
                                    <th scope="col">Tahapan</th>
                                    <th scope="col">Lokasi</th>
                                    <th scope="col">Jumlah Rumah</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    collection && collection.reverse().map((res, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{res.nama}</td>
                                            <td>{res.tahapan}</td>
                                            <td>{res.lokasi}</td>
                                            <td style={{textAlign:'left'}}>{res.jumlah}</td>
                                            <td><button onClick={()=>editCluster(res._id)} className='btn btn-outline-primary' style={{marginRight:10}}>Edit</button><button onClick={()=>{deleteCluster(res._id)}} className='btn btn-outline-danger'>Hapus</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


