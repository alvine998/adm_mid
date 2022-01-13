import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import swal from 'sweetalert';
import Navbar from '../../components/Navbar';

Kontak.title="Kontak-Kami"

function Kontak(props) {
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
        getDataKontak();
    },[])

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [nohp, setNohp] = useState("");
    const [posisi, setPosisi] = useState("");
    const [collection, setCollection] = useState([]);

    const handleNama = (e) => {
        setNama(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleNohp = (e) => {
        setNohp(e.target.value)
    }
    const handlePosisi = (e) => {
        setPosisi(e.target.value)
    }

    const saveKontak = () => {
        const data = {
            nama: nama,
            email: email,
            nohp: nohp,
            posisi: posisi
        }

        console.log(data)
        axios.post(`http://localhost:4000/infos`, data).then(
            res => {
                swal("Sukses Tambah Kontak", {icon:'success'});
                setNama(""); setEmail(""); setNohp(""); setPosisi("");
                getDataKontak();
            }
        )
    }

    const getDataKontak = () => {
        axios.get('http://localhost:4000/infos').then(
            res => {
                console.log(res.data)
                const collection = res.data;
                setCollection(collection)
            }
        )
    }

    const deleteKontak = (id) => {
        axios.delete(`http://localhost:4000/infos/${id}`).then(
            res => {
                swal("Sukses Hapus Kontak", {icon:'success'})
                getDataKontak();
            }
        )
    }

    return (
        <div>
            <Navbar kontak />

            <div className='container'>
                <div>
                    <h2 style={{ textAlign: 'center', paddingTop: 20 }}>Kontak Midland Properti</h2>
                    <div>
                        <a type='button' className={"btn btn-outline-primary"} style={{ marginTop: 20 }} data-bs-toggle="modal" data-bs-target="#exampleModal">Tambah Kontak</a>

                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Tambah Kontak</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form className='form'>
                                            <div>
                                                <label>Nama :</label>
                                                <input type={"text"} value={nama} onChange={handleNama.bind(this)} placeholder='Ketik disini ....' className='form-control' />
                                            </div>
                                            <div style={{ paddingTop: 10 }}>
                                                <label>Nomor Telpon :</label>
                                                <input type={"text"} value={nohp} onChange={handleNohp.bind(this)} placeholder='Ketik disini ....' className='form-control' />
                                            </div>
                                            <div style={{ paddingTop: 10 }}>
                                                <label>Email :</label>
                                                <input type={"email"} value={email} onChange={handleEmail.bind(this)} placeholder='Ketik disini ....' className='form-control' />
                                            </div>
                                            <div style={{ paddingTop: 10 }}>
                                                <label>Posisi :</label>
                                                <input type={"text"} value={posisi} onChange={handlePosisi.bind(this)} placeholder='Ketik disini ....' className='form-control' />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onClick={() => saveKontak()} data-bs-dismiss="modal">Save changes</button>
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
                                    <th scope="col">Posisi</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    collection && collection.reverse().map((res, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{res.nama}</td>
                                            <td>{res.email}</td>
                                            <td>{res.nohp}</td>
                                            <td>{res.posisi}</td>
                                            <td><button className='btn btn-outline-danger' onClick={() => deleteKontak(res._id)}>Hapus</button></td>
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

export default Kontak;