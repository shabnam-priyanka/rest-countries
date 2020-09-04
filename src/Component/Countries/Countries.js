import React from 'react';
import { Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Countries = (props) => {
    
    const { name, population, region, flag, alpha3Code } = props.country;

    // const countryStyle = {
    //     border: '1px solid red',
    //     margin: '20px',
    //     padding: '20px',
    //     borderRadius: '20px'
    // }

    const handleAddCountry = props.handleAddCountry;

    return (
       

            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>Country Name: {name} </Card.Title>
                    <Card.Text>
                        Population: {population}
                        <br />
                        Region: <Link to={"/about/" + region}>{region}</Link>
                    </Card.Text>

                    <Link to={"/countryDetails/" + alpha3Code}> <Button variant="danger" onClick= {() => handleAddCountry(props.country) }>Country details </Button> </Link>
                
                
                </Card.Body>
            </Card>
            
        
        // <div style = {countryStyle}>

        //     <img style={{height: '300px'}} src={flag}  alt=""/>
        //     <h2>Country: {name} </h2>
        //     <p>Population: {population} </p>
        //     <p>Region: <Link to= {"/about/" + region}>{region}</Link></p>
        //     <button onClick={() => handleAddCountry(props.country)} >Add Country</button>
        // </div>
    );
};

export default Countries;