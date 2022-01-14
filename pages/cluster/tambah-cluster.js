import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Navbar from '../../components/Navbar';

TambahCluster.title = "Tambah Data Cluster"

function TambahCluster(props) {
    const [nama, setNama] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [jumlah, setJumlah] = useState('');
    const [tahapan, setTahapan] = useState('');
    // const [collection, setCollection] = useState([]);

    const router = useRouter();
    const getSession = () => {
        var emails = localStorage.getItem("emailKey")
        if(emails == null){
            router.push('/')
        } else {
            console.log("Session :",emails)
        }
    }

    const handleNama = (e) => {
        setNama(e.target.value)
    }

    const handleLokasi = (e) => {
        setLokasi(e.target.value)
    }

    const handleJumlah = (e) => {
        setJumlah(e.target.value)
    }

    const handleTahapan = (e) => {
        setTahapan(e.target.value)
    }

    const router = useRouter();

    const saveCluster = () => {
        const data = {
            nama: nama,
            lokasi: lokasi,
            jumlah: jumlah,
            tahapan: tahapan
        }

        console.log(data)

        axios.post(`http://localhost:4000/clusters`, data).then(
            res => {
                console.log(res.data)
                swal("Berhasil Simpan Data Cluster", { icon: 'success' })
                setNama(""); setLokasi(""); setJumlah(""); setTahapan("")
                removeSession()
                router.push('/cluster')
            }
        )
    }

    const getDataCluster = () => {
        var id = localStorage.getItem('clusterKey')
        console.log(id)
        if (id == null) {
            setNama('')
            setLokasi('')
            setJumlah('')
            setTahapan('')
        } else {
            axios.get(`http://localhost:4000/clusters/${id}`).then(
                res => {
                    const datas = res.data;
                    setNama(datas.nama)
                    setLokasi(datas.lokasi)
                    setJumlah(datas.jumlah)
                    setTahapan(datas.tahapan)
                }
            )
        }
    }

    const updateCluster = () => {
        var id = localStorage.getItem('clusterKey')
        const data = {
            nama: nama,
            lokasi: lokasi,
            jumlah: jumlah,
            tahapan: tahapan
        }

        console.log(data)

        axios.put(`http://localhost:4000/clusters/${id}`, data).then(
            res => {
                console.log(res.data)
                swal("Berhasil Ubah Data Cluster", { icon: 'success' })
                removeSession()
                router.push('/cluster')
            }
        )
    }

    const removeSession = () => {
        localStorage.removeItem('clusterKey')
    }

    useEffect(() => {
        getDataCluster();
        getSession();
    }, [])

    const saveorDelete = () => {
        var id = localStorage.getItem('clusterKey')
        if (id == null) {
            saveCluster()
        } else {
            updateCluster()
        }
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
                            <input value={nama} onChange={handleNama.bind(this)} required className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h5>Jumlah Tahapan Cluster</h5>
                            <input value={tahapan} onChange={handleTahapan.bind(this)} required className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h5>Lokasi Cluster</h5>
                            <input value={lokasi} onChange={handleLokasi.bind(this)} required className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h5>Jumlah Rumah</h5>
                            <input value={jumlah} onChange={handleJumlah.bind(this)} required className='form-control' placeholder='Ketik disini ....' />
                        </div>

                        <div style={{ paddingTop: 10 }}>
                            <Link href={"/cluster"}>
                                <button className='btn btn-outline-primary' onClick={() => saveorDelete()} style={{ width: '100%' }} type='submit'>Simpan</button>
                            </Link>
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <a href='/cluster' onClick={() => removeSession()} className='btn btn-outline-danger' style={{ width: '100%' }}>Kembali</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TambahCluster;