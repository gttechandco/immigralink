import { History } from "@mui/icons-material";
import React from "react";
import { Card } from "react-bootstrap";

const RecentActivity = ({ collections}) => {

     // Exemple de données de chiffres pour l'affichage
    const stats = [
        { label: "Articles", value: 120 },
        { label: "Pages", value: 45 },
        { label: "Utilisateurs", value: 300 },
        { label: "Commentaires", value: 150 },
    ];


    return (
        <Card style={{ width: "100%", margin: 'auto', background: "#001a2d", border: "none", textAlign: "left" }}>
            <Card.Body>
                <Card.Title style={{color: "white", fontSize: "1.3em"}}>Votre activité récente <History style={{color: "slateblue", float: "right"}}/></Card.Title>
                <Card.Text style={{color: "gainsboro", fontSize: "0.9em"}}>
                    Un petit récapitulatif du contenu actuel de votre site internet
                    <br /><br />
                </Card.Text>
                <ul style={{listStyle: 'none', padding: 0}}>
                    {stats.map((stat, index) => (
                        <li key={index} style={{ color: 'white', marginBottom: '0.5rem' }}>
                            <strong>{stat.value}</strong> {stat.label}
                        </li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    );
};

export default RecentActivity;