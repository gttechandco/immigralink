import { ContentCopy } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";
import { fetchCollections } from "../../../../services/strapiServices";

const WebsiteEstate = () => {

    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCollections = async () => {
            try {
                const data = await fetchCollections();
                setCollections(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des collections', error);
            } finally {
                setLoading(false);
            }
        };

        getCollections();
    }, []);


    return (
        <Card style={{ width: "100%", margin: 'auto', background: "#001a2d", border: "none", textAlign: "left" }}>
            <Card.Body>
                <Card.Title style={{color: "white", fontSize: "1.3em"}}>Contenu du site <ContentCopy style={{float: "right", color: "slateblue"}}/></Card.Title>
                <Card.Text style={{color: "gainsboro", fontSize: "0.9em"}}>
                    Un petit récapitulatif du contenu actuel de votre site internet
                    <br /><br />
                </Card.Text>
                <Row>
                    {loading ? <Spinner /> : (
                        collections.map((stat, index) => (
                            <Col xs={12} sm={6} md={3} key={index} style={{ marginBottom: '1rem' }}>
                                <div style={{ color: 'white', fontSize: '1.1em' }}>
                                    <strong>{stat.value}</strong>
                                    <div style={{ fontSize: '0.9em', color: 'lightgray' }}>{stat.label}</div>
                                </div>
                            </Col>
                        ))
                    )} 
                </Row>
            </Card.Body>
        </Card>
    );
};

export default WebsiteEstate;