// ServicePresentationSection.js

import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import image1 from "../../assets/images/Capture.PNG";
import image2 from "../../assets/images/Capture2.PNG";
import image3 from "../../assets/images/Capture3.PNG";

// Slick Carousel Styles
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

function Partners() {

    const [pageData, setPageData] = useState({
        title: "",
        description: "",
    });

    const [partnersList, setPartnersList] = useState([]);

    /*const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };

    const styles = {
        marginTop: "2rem",
        justifyContent: "center",
        alignItems: "center",
    }*/

    useEffect(() => {
        // Fetch Page Data
        /*const fetchData = async () => {
            try {
                const response = await fetch().then();
                setPageData(response.body);
            } catch (error) {
                console.error("Une erreur innatendue nous empêche de récupérer les informations", error);
            }
        };

        fetchData();*/
        setPageData(pageData);
    }, [pageData]);

    useEffect(() => {
        // Fetch ParnersList
        /*const fetchData = async () => {
            try {
                const response = await fetch().then();
                setPartnersList(response.body);
            } catch (error) {
                console.error("Une erreur innatendue nous empêche de récupérer les informations", error);
            }
        };

        fetchData();*/
        setPartnersList(partnersList);
    }, [partnersList]);

    return (
        <section className="services">
            <Container fluid style={{ width: "100%"}}>

                <Paper className='paper' elevation={10} style={{ marginTop: "10rem", padding: "10rem", border: "none"}}>

                    <Grid spacing={10} alignItems="center" justifyContent="center" style={{ border: "none"}}>

                        <Typography variant='h2' className='services-title' style={{ color: "mediumslateblue", textAlign: "justify"}} maxWidth={550}>
                            {pageData.title !== "" ? pageData.title : "Nous avons leur soutient..."}
                        </Typography>

                        <Typography variant='body2' className='services-paragraph' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold", textAlign: "justify", fontSize: "1.1em", color: "black"}} maxWidth={550}>
                            <br></br>
                            {pageData.description !== "" ? pageData.description : "Plongez dans notre réseau dynamique de partenaires qui enrichissent notre mission d'ouvrir les portes du monde. Avec des collaborations solides, nous façonnons ensemble des expériences uniques pour chaque voyageur. Explorez nos alliances stratégiques et découvrez comment elles renforcent notre engagement envers l'excellence dans le domaine des services de voyage ..."}
                        </Typography>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Carousel>
                            {partnersList === "" ? (
                                <>
                                    <Carousel.Item className="slide">
                                        <img className='d-block w-100' src={image1} alt="Partner 1" style={{ height: "300px"}}/>
                                    </Carousel.Item>
                                    <Carousel.Item className="slide">
                                        <img className='d-block w-100' src={image2} alt="Partner 2" style={{ height: "300px"}}/>
                                    </Carousel.Item>
                                    <Carousel.Item className="slide">
                                        <img className='d-block w-100' src={image3} alt="Partner 3" style={{ height: "300px"}}/>
                                    </Carousel.Item>
                                </>
                            ) : (
                                partnersList.map((partner, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <img
                                                className='d-block w-100'
                                                src={partner.imageUrl}
                                                alt={partner.imageAlt}
                                                style={{ height: "300px"}}
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            )}
                        </Carousel>
                        
                    </Grid>

                </Paper>
                
            </Container>
        </section>
    );
}

export default Partners;
