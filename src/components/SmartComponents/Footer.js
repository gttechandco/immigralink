import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import "../main/Footer/Footer.css";

const Footer = () => {

    const [footerData, setFooterData] = useState({
        enterpriseName: "",
        enterpriseSlug: "",
        usefullLinks: [],
        resourcesLinks: [],
        copyright: "",
    });

    useEffect(() => {
        // Fetch Footer Informations from strapi
        /*const fetchData = async() => {
            try {
                const response = await fetch().then();
                setFooterData(response.body);
            } catch (error) {
                console.error("Une erreur nous empêche de récupérer les informations du footer", error);
            }
        };

        fetchData();*/
        setFooterData(footerData);
    }, [footerData]);

    return (
        <footer className='footer'>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3} style={{ color: "mediumslateblue"}}>
                    {/* Colonne 1 */}
                    <Typography variant="h2"><i className='bi bi-browser-edge'></i></Typography>
                    <Typography variant="h6">{footerData.enterpriseName !== "" ? footerData.enterpriseName : "GLOBAL TRAVEL"}</Typography>
                    <Typography variant="body2" className='slug' maxWidth={200}>{footerData.enterpriseSlug !== "" ? footerData.enterpriseSlug : "Contactez nous et voyagez sans stress"}</Typography>
                    {/* Logo ici */}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {/* Colonne 2 */}
                    <Typography variant="h6" className='utilsLinksTitle'>Liens utiles</Typography>
                    {/* Liens vers les sections du site ici */}
                    <ul className='linkList' style={{ listStyleType: "none"}}>
                        {footerData.usefullLinks === "" ? (
                            footerData.usefullLinks.map((links, index) => {
                                return (
                                    <li style={{ margin: "5px"}} key={index}>
                                        <a className='link' href={links.url}>
                                            {links.text}
                                        </a>
                                    </li>
                                )
                            })
                        ) : (
                            <>
                                <li style={{ margin: "5px"}}>
                                    <a className='link' href='/travel-website/'>
                                        Accueil
                                    </a>
                                </li>
                                <li style={{ margin: "5px"}}>
                                    <a className='link' href='/travel-website/processes-page/'>
                                        Procédure
                                    </a>
                                </li>
                                <li style={{ margin: "5px"}}>
                                    <a className='link' href='/travel-website/services-page/'>
                                        Services
                                    </a>
                                </li>
                                <li style={{ margin: "5px"}}>
                                    <a className='link' href='/travel-website/team-page/'>
                                        Equipe
                                    </a>
                                </li>
                                <li style={{ margin: "5px"}}>
                                    <a className='link' href='/travel-website/faq-page/'>
                                        F A Q
                                    </a>
                                </li>
                                <li style={{ margin: "5px"}}>
                                    <a className='link' href='/travel-website/contacts-page/'>
                                        Contacts
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {/* Colonne 3 */}
                    <Typography variant="h6">Ressources</Typography>
                    {/* Liens vers la documentation en ligne et les réseaux sociaux ici */}
                    <ul style={{ listStyleType: "none", display: "flex"}}>
                        {footerData.resourcesLinks === "" ? (
                            footerData.resourcesLinks.map((resource, index) => {
                                return (
                                    <li style={{ letterSpacing: "10px"}} key={index}>
                                        <a href={resource.url}><i className={resource.icon}></i></a>
                                    </li>
                                )
                            })
                        ) : (
                            <>
                                <li style={{ letterSpacing: "10px"}}>
                                    <a href='https://www.instagram.com/globalTravel'><i className='bi bi-instagram'></i></a>
                                </li>
                                <li style={{ letterSpacing: "10px"}}>
                                    <a href='https://www.instagram.com/globalTravel'><i className='bi bi-facebook'></i></a>
                                </li>
                                <li style={{ letterSpacing: "10px"}}>
                                    <a href='https://www.instagram.com/globalTravel'><i className='bi bi-google'></i></a>
                                </li>
                            </>
                        )}
                        
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {/* Colonne 4 */}
                    <Typography variant="h6">Informations utiles</Typography>
                    {/* Informations supplémentaires ici */}
                </Grid>
                </Grid>
                <br />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {/* Deuxième ligne */}
                        <Typography variant="body2">&copy; {new Date().getFullYear()} {footerData.copyright !== "" ? footerData.copyright : "GLOBAL TRAVEL SARL. Tous droits réservés."}</Typography>
                        {/* Licence ici */}
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
