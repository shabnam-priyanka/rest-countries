import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CountryDetail = () => {
    const [detail, setDetail] = useState([]);
    const { key } = useParams()
    const { name, population, region, flag } = detail;

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${key}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])
    console.log(name);
    return (
        
        <Jumbotron>
            <img src={flag} alt="" />
            <h1>Country Name: {name} </h1>
            <h3>Population: {population}</h3>
            <h3>region: {region} </h3>
        </Jumbotron>
        // <div>
        //     <h3>Country Name: {name} </h3>
        //     <img src={flag} alt="" />
        // </div>
    );
};

export default CountryDetail;