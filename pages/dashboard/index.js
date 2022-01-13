import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'

Dashboard.title="Dashboard"

export default function Dashboard(props) {
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
    },[])

    return (
        <div>
            <Navbar beranda/>
        </div>
    )
}
