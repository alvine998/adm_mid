import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';

function EditCluster(props) {
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
            <Navbar cluster/>
            <div>
                
            </div>
        </div>
    );
}

export default EditCluster;