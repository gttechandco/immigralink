import { Article } from '@mui/icons-material';
import React from 'react';
import { Card } from 'react-bootstrap';

const WelcomeCard = ({ userName }) => {
    return (
        <Card style={{ width: "100%", margin: 'auto', marginTop: '2rem', background: "transparent", border: "none", textAlign: "left" }}>
            <Card.Body>
                <Card.Title style={{color: "white", fontSize: "3em"}}>Bienvenue 👋, {userName}!</Card.Title>
                <Card.Text style={{color: "gainsboro"}}>
                    Nous sommes heureux de vous retrouver! Sentez vous libre de lire les dernières nouvelles de votre équipe de développement.<br />
                    Nous sommes ravis de recevoir vos suggestions pour nous améliorer constamment.
                    <br /><br />
                    <a href="gttechandco.cm" style={{ color: "slateblue", textDecoration: "none"}}>En savoir plus sur le blog<Article /></a>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default WelcomeCard;