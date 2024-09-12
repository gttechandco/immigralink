// ServicePresentationSection.js

import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Card, CardTitle, CardBody } from 'react-bootstrap';

function Numbers() {

    const [pageData, setPageData] = useState({
        title1: "",
        title2: "",
    });

    const [numbers, setNumbers] = useState({
        city: "",
        percent: "",
    });

    const [returns, setReturns] = useState({
        name: "",
        quote: "",
        enterprise: "",
    });

    const success = [
        {city: "Paris", percent: 75},
        {city: "Tokyo", percent: 67},
        {city: "Londres", percent: 88},
    ];

    const testimonials = [
        { name: "Marie D.", quote: "Grâce à leur expertise, j'ai pu obtenir mon visa rapidement et facilement. Je recommande vivement leurs services!", entreprise: "AXA Assurances" },
        { name: "Thomas B.", quote: "Leur équipe dévouée m'a accompagné à chaque étape de mon voyage. Un service exceptionnel!", entreprise: "" },
        { name: "Daniella B.", quote: "J'aurais aimé entrer en contact avec eux plus tôt. Mais aujourd'hui toute ma famille ne s'en remet qu'à eux. Très professionnels!", entreprise: "" },
    ];

    useEffect(() => {
        // Fetch successes from strapi 
        /*const fetchSuccess = async() => {
            try {
                const fetchData = await fetch().then();
                setSuccess(fetchData.body);
            } catch (error) {
                console.error("Une erreur innatendue nous empêche de récupérer les données", error);
            }
        };

        fetch();*/
        setNumbers(numbers);
    }, [numbers]);

    useEffect(() => {
        // Fetch Testimonials from strapi
        /*const fetchReturns = async() => {
            try {
                const fetchData = await fetch().then();
                setReturns(fetchData.body);
            } catch (error) {
                console.error("Une erreur innatendue nous empêche de récupérer les données", error);
            }
        };

        fetch();*/
        setReturns(returns);
    }, [returns]);

    useEffect(() => {
        // Fetch Page Data from strapi
        /*const fetchPageData = async() => {
            try {
                const fetchData = await fetch().then();
                setPageData(fetchData.body);
            } catch (error) {
                console.error("Une erreur innatendue nous empêche de récupérer les données", error);
            }
        };

        fetch();*/
        setPageData(pageData);
    }, [pageData]);

    return (
        <section className="services">
            <Container fluid style={{ width: "100%"}}>

                <Paper className='paper' elevation={10} style={{ marginTop: "10rem", padding: "10rem", border: "none"}}>

                    <Grid spacing={10} alignItems="center" justifyContent="center" style={{ border: "none"}}>

                        <Typography variant='h2' className='services-title' style={{ color: "mediumslateblue"}} maxWidth={550}>
                            {pageData.title1 !== "" ? pageData.title1 : "Quelques chiffres..."}
                        </Typography>

                        <Row className="justify-content-center" style={{marginTop: "2rem"}}>
                            {numbers === "" ? (
                                numbers.map((data, index) => {
                                    return (
                                        <Col sm="12" md="4" lg="4" xl="4" key={index}>
                                            <Card style={{padding: "5rem", border: "none"}}>
                                                
                                                <CardBody style={{ justifyContent: "center", alignItems: "center"}}>
                                                    <Typography variant='h4' className='paragraph'>
                                                        {data.percent} %
                                                        <div class="progress">
                                                            <div class="progress-bar" style={numbers ? (
                                                                {width: {...data.percent.toString()}}
                                                            ) : ({width: "0"})}  role="progressbar" defaultValue="75" aria-valuemin="0" aria-valuemax="100" color='green'></div>
                                                        </div>
                                                    </Typography>
                                                    <CardTitle>
                                                        {data.city}
                                                    </CardTitle>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            ) : (
                                success.map((data, index) => {
                                    return (
                                        <Col sm="12" md="4" lg="4" xl="4" key={index}>
                                            <Card style={{padding: "5rem", border: "none", borderRadius: "100%"}}>
                                                
                                                <CardBody style={{ justifyContent: "center", alignItems: "center"}}>
                                                    <Typography variant='h4' className='paragraph' textAlign="center">
                                                        {data.percent} %
                                                        <div class="progress">
                                                            <div class="progress-bar" style={success ? (
                                                                {width: {...data.percent.toString()}}
                                                            ) : ({width: "0"})}  role="progressbar" defaultValue="75" aria-valuemin="0" aria-valuemax="100" color='green'></div>
                                                        </div>
                                                    </Typography>
                                                    <CardTitle>
                                                        {data.city}
                                                    </CardTitle>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            )}
                        </Row>

                        <Row className="justify-content-center" style={{marginTop: "2rem"}}>
                            <Typography variant='h4' className='title' style={{ color: "mediumslateblue"}}>
                                {pageData.title2 !== "" ? pageData.title2 : "Ce qu'ils en disent..."}
                            </Typography>
                            <br />
                            <br />
                            <br />
                            {returns === "" ? (
                                returns.map((data, index) => {
                                    return (
                                        <Col sm="12" md="4" lg="4" xl="4" key={index} style={{ marginTop: "1rem"}}>
                                            <Card style={{padding: "6rem", border: "none", background: "whitesmoke", color: "#333"}}>
                                                <CardBody style={{ justifyContent: "center", alignItems: "center", height: "150px"}}>
                                                    <Typography variant='body2' className='paragraph'>
                                                        {data.quote}
                                                    </Typography>
                                                    <br />
                                                    <CardTitle style={{textAlign: "right"}}>
                                                        {data.name}
                                                    </CardTitle>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            ) : (
                                testimonials.map((data, index) => {
                                    return (
                                        <Col key={index} style={{ marginTop: "1rem"}}>
                                            <Card style={{padding: "6rem", border: "none", background: "whitesmoke", color: "#333"}}>
                                                <CardBody style={{ justifyContent: "center", alignItems: "center", height: "150px"}}>
                                                    <Typography variant='body2' className='paragraph'>
                                                        {data.quote}
                                                    </Typography>
                                                    <br />
                                                    <CardTitle style={{textAlign: "right"}}>
                                                        {data.name}
                                                    </CardTitle>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            )}
                        </Row>
                    </Grid>

                </Paper>
                
            </Container>
        </section>
    );
}

export default Numbers;
