import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';

const Vehicles  = () => {
    
    const {userid} =useParams();
    return (
        <>
        <h1>Vehicles</h1>
        <h1>user id {userid}</h1>

        </>
    )
}

export default Vehicles 