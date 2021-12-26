import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Midland Properti</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a className={'nav-link ' + (props.beranda ? "active" : "")} aria-current="page" href="#">Beranda</a>
                            </li>
                            <li class="nav-item">
                                <a className={'nav-link ' + (props.banner ? "active" : "")} href="#">Banner</a>
                            </li>
                            <li class="nav-item">
                                <a className={'nav-link ' + (props.rekrut ? "active" : "")} href="#">Rekrutmen</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cluster
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Tambah Cluster</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a className={'nav-link ' + (props.kontak ? "active" : "")} href="#">Kontak Kami</a>
                            </li>
                            <li class="nav-item">
                                <a className={'nav-link ' + (props.profil ? "active" : "")} href="#">Profil Kami</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-outline-danger" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
