import React from 'react';
import Navbar from '../../components/Navbar';

function TambahLowongan(props) {
    return (
        <div>
            <Navbar rekrut />

            <div className='container'>
                <h2 style={{ paddingTop: 20, textAlign: 'center' }}>Tambah Lowongan Karir</h2>
                <div style={{ paddingTop: 20 }}>
                    <form>
                        <div>
                            <h5>Nama Pekerjaan</h5>
                            <input className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h5>Detail Pekerjaan</h5>
                            <textarea rows={4} className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <h5>Persyaratan</h5>
                            <textarea rows={4} className='form-control' placeholder='Ketik disini ....' />
                        </div>
                        <div style={{ paddingTop: 10 }}>
                            <button className='btn btn-outline-primary' style={{width:"100%"}}>Simpan</button>
                            <a className='btn btn-outline-danger' href='/rekrutmen' style={{width:"100%", marginTop:10}}>Batal</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TambahLowongan;