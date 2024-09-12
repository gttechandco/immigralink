// NewsletterSection.js

import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import "../../assets/styles/AboutEnterprise.css";
import axios from 'axios';
import { useSnackbar } from 'notistack';


function NewsletterSection() {
    const { enqueueSnackbar } = useSnackbar();
    let ApiBase = "http://127.0.0.1:8000";
    let newsletter = "api/newsletter/suscribe";

    const [visitorMail, setVisitorMail] = useState("");

    const handleChangeVisitorMail = (e) => setVisitorMail(e.target.value);

    const handleSubmit = async () => {
        try {
            const suscribe = await axios.post(`${ApiBase}/${newsletter}`, visitorMail);
            if(suscribe.status >= 200 && suscribe.status <= 300) {
                enqueueSnackbar("Souscription Ok!", {
                    variant: "info",
                    autoHideDuration: 5000,
                })
            }
        } catch (error) {
            let status = error.response?.status;
            let details = error.response?.data.detail;
            let message = error.response?.data.message;
            switch (status) {
                case 500:
                    enqueueSnackbar("Erreur interne du serveur", {
                        variant: "error",
                        autoHideDuration: 2500,
                    });
                    break;
                case 404:
                    enqueueSnackbar("Adresse introuvable", {
                        variant: "error",
                        autoHideDuration: 2500,
                    });
                    break;
                case 401:
                    enqueueSnackbar(details || message, {
                        variant: "error",
                        autoHideDuration: 2500,
                    });
                    break;
                case 403:
                    enqueueSnackbar(details || message, {
                        variant: "warning",
                        autoHideDuration: 2500,
                    });
                    break;
            
                default:
                    enqueueSnackbar("Erreur innatendue" || message || details, {
                        variant: "warning",
                        autoHideDuration: 2500,
                    });
                    break;
            }
        }
    }

    return (
        <section className="newsletter-section">
            <div className="container-fluid">
                <Paper className="paper" elevation={8}  style={{ marginTop: "5rem", padding: "10rem", border: "none"}}>
                    <Grid container spacing={5} alignItems="center" justifyContent="center" style={{ border: "none"}}>
                        <Grid item xs={12} md={8} >
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <h2 className="text-center">Abonnez-vous à notre Newsletter</h2>
                                    <form onSubmit={() => handleSubmit()}>
                                        <div className="mb-3">
                                            <input type="email" value={visitorMail} className="form-control" onChange={handleChangeVisitorMail} placeholder="Entrez votre adresse e-mail" required />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">S'abonner</button>
                                    </form>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </section>
    );
}


export default NewsletterSection;

