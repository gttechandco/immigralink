import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import "../../assets/styles/HeroSection.css";

const HeroSection = ({ pageTitle, toReach }) => {

    const [heroContent, setHeroContent] = useState({
        title: "",
        description: "",
    });

    useEffect(() => {
        // Fetch data from Strapi
        /*const fetchHeroContent = async () => {
            try {
                const fetchData = await fetch().then();
                setHeroContent(fetchData.body);
            } catch (error) {
                console.error("Une erreur innatendue nous empêche de récupérer les informations", error);
            }
        };

        fetchHeroContent();*/
        setHeroContent(heroContent);
    }, [heroContent]);

    return (
        <div style={{ background: "#333", backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 64px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Container maxWidth="xl" style={{ textAlign: 'center', color: 'white' }}>
                <div className='row'>
                    <div className='col'>
                        <Typography variant="h1" gutterBottom className='hero-title'> 
                            {heroContent.title !== "" ? heroContent.title : "GLOBAL TRAVEL"}
                        </Typography>
                        <Typography variant='h3' gutterBottom className='title' textAlign="center">{pageTitle}</Typography>
                        <Typography variant="body1" paragraph>
                            {heroContent.description !== "" ? heroContent.description : "Nous vous accompagnons pendant toute votre procédure et voyagez sans stress"}
                        </Typography>
                        <Button variant="contained" className='actionButton' style={{margin: "4rem"}}>
                            <a href={toReach} style={{ color: "white", textDecoration: "none"}}> En savoir plus</a><i className='bi bi-caret-right' style={{ marginLeft: "10px"}}></i>
                        </Button>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default HeroSection;
