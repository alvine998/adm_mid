import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar(props) {

    const [collection, setCollection] = useState([]);

    const getDataCluster = () => {
        axios.get(`http://localhost:4000/clusters`).then(
            res => {
                const collection = res.data;
                console.log(collection)
                setCollection(collection)
            }
        )
    }

    useEffect(() => {
        getDataCluster();
    }, [])
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/dashboard">Midland Properti</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a className={'nav-link ' + (props.beranda ? "active" : "")} aria-current="page" href="/dashboard">Beranda</a>
                            </li>
                            <li class="nav-item">
                                <a className={'nav-link ' + (props.banner ? "active" : "")} href="/banner">Banner</a>
                            </li>
                            <li class="nav-item">
                                <a className={'nav-link ' + (props.rekrut ? "active" : "")} href="/rekrutmen">Rekrutmen</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a className={'nav-link dropdown-toggle ' + (props.cluster ? "active" : "")} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cluster
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {
                                        collection && collection.reverse().map((res, i) =>  
                                        (
                                            <li key={i}><a class="dropdown-item" href="#">{res.nama}</a></li>
                                        ))
                                    }
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/cluster">Master Data Cluster</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a className={'nav-link ' + (props.kontak ? "active" : "")} href="/kontak">Kontak Kami</a>
                            </li>
                            <li class="nav-item">
                                <a className={'nav-link ' + (props.profil ? "active" : "")} href="/profil">Profil Kami</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <Link href={"/"}>
                                <button class="btn btn-outline-danger">Logout</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
