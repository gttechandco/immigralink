// ServicePresentationSection.js

import { Avatar, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import "../../assets/styles/EnterpriseServices.css";

function Team() {

    const [teamData, setTeamData] = useState({
        title: "",
        description: "",
    });
    const [teamList, setTeamList] = useState([]);

    const teamMembers = [
        {initial: "HL",name: "Hounang L.", post: "Ressources Humaines", description: "J'ai toujours accordé une importance particulière à la gestion des Hommes et femmes car c'est un point important de toute bonne équation"},
        {initial: "MB",name: "Madiese B.", post: "Ressources Humaines", description: "Pour mener à bien un projet, il faut savoir gérer les personnes qui y prendront par. Car sans eux, rien n'est possible"},
        {initial: "DB",name: "Daniella B.", post: "C E O", description: "J'ai compris l'importance de faire face à d'autres réalites que celles que nous connaissons de base. Ca forge le caractère"},
        {initial: "EA",name: "Ekame A.", post: "Call Center", description: "Etre à l'écoute, comprendre le besoin et apporter des éléments de réponse satisfaisants sont ce qui me motive à continuer dans ce travail"},
    ];

    useEffect(() => {
        // Fetch TeamPage Data from strapi
        /*const fetchData = async () => {
            try {
                const response = await fetch().then();
                setTeamData(response.body);
            } catch (error) {
                console.error("Une erreur innatendue nous empêche de récupérer les données", error);
            }
        };    

        fetchData();*/
        setTeamData(teamData);
    }, [teamData]);

    useEffect(() => {
        // Fetch TeamList Data from strapi
        /*const fetchData = async () => {
            try {
                const response = await fetch().then();
                setTeamList(response.body);
            } catch (error) {
                console.error("Une erreur innatendue nous empêche de récupérer les données", error);
            }
        };      

        fetchData();*/
        setTeamList(teamList);
    }, [teamList]);

    return (
        <section className="services" id='teamMembers'>
            <Container fluid style={{ width: "100%"}}>
                <Paper className='paper' elevation={10} style={{ marginTop: "10rem", padding: "10rem", border: "none"}}>
                    <Grid spacing={10} alignItems="center" justifyContent="center" style={{ border: "none"}}>
                        <Typography variant='h2' className='services-title' style={{ color: "mediumslateblue", textAlign: "justify"}} maxWidth={550}>
                            {teamData.title !== "" ? teamData.title : "Nos professionnels à votre service..."}
                        </Typography>
                        <Typography variant='body2' className='services-paragraph' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold", color: "black", fontSize: "1.1em", textAlign: "justify"}} maxWidth={550}>
                            <br></br>
                            {teamData.description !== "" ? teamData.description : "Une équipe compétente, à l'écoute et bien outillée pour mieux satisfaire vos besoins..."}
                        </Typography>
                        
    
                        <Grid spacing={10} alignItems="center" justifyContent="center" className='cards-grids' style={{ marginTop: "7rem", display: "flex"}} >
                            <Row>
                                {teamList === "" ? (
                                    teamList.map((member, index) => {
                                        return(
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4" key={index}>
                                            <Card className='services-card' style={{background: "#333", color: "#fff", border: "none", padding: "1rem",}}>
                                                <CardHeader style={{border: "none", justifyContent: "center", alignItems: "center"}}>
                                                    <Avatar alt={member.initial} src={member.initial} style={{width: "200px", height: "200px", textAlign: "center"}}/>
                                                    <br />
                                                </CardHeader>
                                                <CardBody>
                                                    <Typography variant='h4' className='title' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold"}}>
                                                        {member.name}
                                                    </Typography>
                                                    <Typography variant="h6" className='title' style={{ fontFamily: "Segoe UI Light"}}>
                                                        {member.post}
                                                    </Typography>
                                                    <br />
                                                    <br />
                                                    <Typography variant="body2" className='paragraph' style={{ fontFamily: "Segoe UI Light"}}>
                                                        <i className='bi bi-chat-left-quote' style={{ fontSize: "30px", color: "mediumslateblue"}}></i> {member.description}
                                                    </Typography>
                                                </CardBody>

                                                <CardFooter style={{ marginTop: "2rem", border: "none"}}>
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                        )
                                    })
                                ) : (
                                    teamMembers.map((member, index) => {
                                        return (
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4" key={index}>
                                            <Card className='services-card' style={{background: "#333", color: "#fff", border: "none", padding: "1rem", margin: "10px"}}>
                                                <CardHeader style={{border: "none", justifyContent: "center", alignItems: "center"}}>
                                                    <Avatar alt={member.initial} src={member.initial} style={{width: "200px", height: "200px", textAlign: "center"}}/>
                                                    <br />
                                                </CardHeader>
                                                <CardBody>
                                                    <Typography variant='h4' className='title' style={{ fontFamily: "Segoe UI Light", fontWeight: "bold"}}>
                                                        {member.name}
                                                    </Typography>
                                                    <Typography variant="h6" className='title' style={{ fontFamily: "Segoe UI Light"}}>
                                                        {member.post}
                                                    </Typography>
                                                    <br />
                                                    <br />
                                                    <Typography variant="body2" className='paragraph' style={{ fontFamily: "Segoe UI Light", fontSize: "1.1em"}}><i className='bi bi-chat-left-quote' style={{ fontSize: "15px", color: "mediumslateblue"}}></i> {member.description}<i className='bi bi-chat-right-quote' style={{ marginLeft: "10px", fontSize: "15px", color: "mediumslateblue"}}></i>
                                                    </Typography>
                                                </CardBody>

                                                <CardFooter style={{ marginTop: "2rem", border: "none"}}>
                                                </CardFooter>
                                            </Card>
                                        </Col>
                                        )
                                    })
                                )}
                            </Row>
                        </Grid>

                        
                    </Grid>

                </Paper>
                
            </Container>
        </section>
    );
}

export default Team;
