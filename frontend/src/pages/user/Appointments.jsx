import React from 'react'
import useFetch from "../../hooks/useFetch";

const Appointments = () => {
    const { data: upcomingApt, uloading, uerror } = useFetch("http://localhost:8080/v1/upcomming-appointments");
    const { data: pastApt, ploading, perror } = useFetch("http://localhost:8080/v1/past-appointments");

    return (
        <>
            <h2>Upcoming Appointment Data:</h2>
            <pre>{JSON.stringify(upcomingApt, null, 2)}</pre>

            <h2>Past Appointment Data:</h2>
            <pre>{JSON.stringify(pastApt, null, 2)}</pre>
        </>
    )
}

export default Appointments