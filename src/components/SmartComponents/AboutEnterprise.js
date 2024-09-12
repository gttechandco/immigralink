import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import "../../assets/styles/AboutEnterprise.css";

function AgencyPresentationSection() {
  const [presentationSectionData, setPresentationSectionData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    // Fetch Data From Strapi
    /*const fetchPresentationData = async () => {
      try {
        const fetchData = await fetch().then();
        setPresentationSectionData(fetchData.body);
      } catch (error) {
        console.error("Une erreur nous empêche de récupérer les données", error);
      }
    };

    fetchPresentationData();*/
    setPresentationSectionData(presentationSectionData);
  }, [presentationSectionData]);

  return (
      <section className='root' id='aboutentreprise'>
      <Container maxWidth="xl">
        <Paper className="paper" elevation={8}  style={{ marginTop: "5rem", padding: "10rem", border: "none"}}>
          <Grid container spacing={5} alignItems="center" style={{ border: "none"}}>
            <Grid item xs={12} md={8} >
              <Typography variant="h2" className="title">
                {presentationSectionData.title !== "" ? presentationSectionData.title : "Une vision, Une procédure, Un voyage ..."}
              </Typography>
              <br />
              <br />
              <Typography variant="body1" className="paragraph" style={{ fontFamily: "Segoe UI Light", fontWeight: "bold"}}>
                {presentationSectionData.description !== "" ? presentationSectionData.description : "En tant que spécialistes de l'assistance aux voyages, nous nous engageons à rendre votre expérience de voyage aussi fluide et sans tracas que possible. De la planification initiale de votre voyage à l'arrivée à votre destination, nous sommes là pour vous fournir les informations, les conseils et les services dont vous avez besoin pour vous assurer une entrée en douceur dans le pays de votre choix. Notre gamme de services comprend une assistance pour l'obtention de visas et de permis de séjour, des conseils sur les exigences en matière de santé et de sécurité, des recommandations sur les transports et l'hébergement et bien d'autres afin de vous fournir la meilleure expérience possible."}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      
    </section>

    
  );
}

export default AgencyPresentationSection;
