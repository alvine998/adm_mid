import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import Navbar from '../../components/Navbar';

TambahCluster.title="Tambah Data Cluster"

function TambahCluster(props) {
    const [nama, setNama] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [jumlah, setJumlah] = useState('');
    const [tahapan, setTahapan] = useState('');

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
                swal("Berhasil Simpan Data Cluster", {icon:'success'})
                setNama(""); setLokasi(""); setJumlah(""); setTahapan("")
            }
        )
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
                            <h5>Tahapan Cluster</h5>
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

                        <div style={{paddingTop:10}}>
                            <button className='btn btn-outline-primary' onClick={()=>saveCluster()} style={{width:'100%'}} type='submit'>Simpan</button>
                        </div>
                        <div style={{paddingTop:10}}>
                            <a href='/cluster' className='btn btn-outline-danger' style={{width:'100%'}}>Kembali</a>
                        </div>                    
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TambahCluster;