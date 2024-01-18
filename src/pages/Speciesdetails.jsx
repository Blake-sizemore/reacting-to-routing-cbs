import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';

const Speciesdetails = () => {
    
    const {userid} =useParams();
    return (
        <>
        <h1>Species Details</h1>
        <h1>user id {userid}</h1>

        </>
    )
}

export default Speciesdetails