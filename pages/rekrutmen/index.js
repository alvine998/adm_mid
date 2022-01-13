import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Navbar from '../../components/Navbar';

Rekrutmen.title="Rekrutmen"

function Rekrutmen(props) {
    const router = useRouter();
    const getSession = () => {
        var emails = localStorage.getItem("emailKey")
        if(emails == null){
            router.push('/')
        } else {
            console.log("Session :",emails)
        }
    }

    useEffect(() => {
        getSession();
        getDataLowongan();
    },[])

    const [collection, setCollection] = useState([]);

    const dataLowongan = (id) => {
        localStorage.setItem('karirKey', id)
    }

    const getDataLowongan = () => {
        axios.get(`http://localhost:4000/karirs`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection)
            }
        )
    }

    const deleteLowongan = (id) => {
        axios.delete(`http://localhost:4000/karirs/${id}`).then(
            res => {
                swal("Sukses Tambah Lowongan", { icon: 'success' })
                getDataLowongan();
            }
        )
    }

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
                                {
                                    collection && collection.reverse().map((res, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{res.nama}</td>
                                            <td>{res.detail}</td>
                                            <td>{res.syarat}</td>
                                            <td><a href={`/tambah-lowongan?id=${res._id}`}  className='btn btn-outline-success'>Edit</a><button className='btn btn-outline-danger' style={{ marginLeft: 10 }} onClick={()=>deleteLowongan(res._id)}>Hapus</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rekrutmen;