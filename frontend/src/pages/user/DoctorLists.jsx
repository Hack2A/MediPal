import React from 'react'
import useFetch from "../../hooks/useFetch";

const DoctorLists = () => {
    const { data: verified, uloading, uerror } = useFetch("http://localhost:8080/v1/getverified");
    const { data: nonverified, ploading, perror } = useFetch("http://localhost:8080/v1/getunder");


    return (
        <>
            <h2>Verified Doctor Data:</h2>
            <pre>{JSON.stringify(verified, null, 2)}</pre>

            <h2>Non-Verified Doctor Data:</h2>
            <pre>{JSON.stringify(nonverified, null, 2)}</pre>
        </>
    )
}

export default DoctorLists