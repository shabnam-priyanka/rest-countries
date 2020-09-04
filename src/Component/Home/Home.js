import React, { useState, useEffect } from 'react';
import Countries from '../Countries/Countries';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      fetch ('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    },[])

    const handleAddCountry = (countries) => {
        console.log('country added', countries)
    };

    return (
        <div>
            <h1>Countries:{countries.length} </h1>
            <div className='d-flex flex-wrap m-3' >
            {
                countries.map(country => <Countries  country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code} ></Countries>)
            }
            </div>
            
        </div>
    );
};

export default Home;