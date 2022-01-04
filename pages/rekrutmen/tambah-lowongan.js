import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import Navbar from '../../components/Navbar';

function TambahLowongan(props) {
    const [nama, setNama] = useState("");
    const [detail, setDetail] = useState("");
    const [syarat, setSyarat] = useState("");

    const handleNama = (e) => {
        setNama(e.target.value)
    }

    const handleDetail = (e) => {
        setDetail(e.target.value)
    }

    const handleSyarat = (e) => {
        setSyarat(e.target.value)
    }

    const saveKarir = () => {
        const data = {
            nama: nama,
            detail: detail,
            syarat: syarat
        }

        console.log(data);

        axios.post(`http://localhost:4000/karirs`, data).then(
            res => {
                swal("Sukses Tambah Lowongan", {icon:'success'})
                setNama("");
                setDetail("");
                setSyarat("");
                console.log(res.data)
            }
        )
    }

    return (
        <div>
            <Navbar rekrut />

            <div className='container'>
                <h2 style={{ paddingTop: 20, textAlign: 'center' }}>Tambah Lowongan Karir</h2>
                <div style={{ paddingTop: 20 }}>
                    <form>
                        <div>
                            <h5>Nama Pekerjaan</h5>
                            <input value={nama} onChange={handleNama.bind(this)} className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h5>Detail Pekerjaan</h5>
                            <textarea value={detail} onChange={handleDetail.bind(this)} rows={4} className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h5>Persyaratan</h5>
                            <textarea value={syarat} onChange={handleSyarat.bind(this)} rows={4} className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <button className='btn btn-outline-primary' style={{width:"100%"}} onClick={() => saveKarir()}>Simpan</button>
                            <a className='btn btn-outline-danger' href='/rekrutmen' style={{width:"100%", marginTop:10}}>Batal</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TambahLowongan;