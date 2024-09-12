import { ListAltOutlined } from "@mui/icons-material";
import React from "react";
import { Card } from "react-bootstrap";

const JoinCard = () => {
    const LinkList = [
        { url: "http://gttechandco.cm", title: "Google", icon: "bi bi-browser-chrome", color: "green" },
        { url: "http://facebook.com/gttechandco", title: "Facebook", icon: "bi bi-facebook", color: "blue" },
        { url: "http://twitter.com/gttechandco", title: "Twitter", icon: "bi bi-twitter", color: "blue" },
        { url: "http://instagram.com/gttechandco", title: "Instagram", icon: "bi bi-instagram", color: "pink" },
        { url: "http://youtube.com/gttechandco", title: "Youtube", icon: "bi bi-youtube", color: "red" },
        { url: "http://reddit.com/gttechandco", title: "Reddit", icon: "bi bi-reddit", color: "red" },
    ];

    return (
        <Card style={{ width: "100%", maxWidth: "500px", margin: 'auto', background: "#001a2d", border: "none", textAlign: "left" }}>
            <Card.Body>
                <Card.Title style={{ color: "white", fontSize: "1.2em" }}>Rejoindre la communauté</Card.Title>
                <Card.Text style={{ color: "gainsboro", fontSize: "0.9em" }}>
                    Devenez contributeur ou échangez avec l'équipe de <br />différentes façons.
                    <br /><br />
                    <a href="http://gttechandco.cm/services" style={{ color: "slateblue", textDecoration: "none", fontWeight: "bold" }}>
                        Découvrir nos services <ListAltOutlined style={{ verticalAlign: "middle" }} />
                    </a>
                    <div className="linkList" style={{ marginTop: '1rem' }}>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {LinkList.map((element, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                                    <i style={{ fontSize: "1.5em", marginRight: "15px", color: element.color }} className={element.icon}></i>
                                    <a style={{ textDecoration: "none", color: "white", fontSize: "1.1em", fontWeight: "bold" }} href={element.url}>
                                        {element.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default JoinCard;
