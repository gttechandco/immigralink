import React, { useState } from 'react';
import { Container } from '@mui/material';
import { Email, AccountCircle, Password } from "@mui/icons-material";
import { Button, FormControl, FormLabel, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const enqueueSnackbar = useSnackbar();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        first_name: '',
        last_name: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here
    setLoading(true);
    if(formData.confirm_password !== formData.password) {
        
        setTimeout(() => {
            setLoading(false);
            enqueueSnackbar("Les mots de passe ne correspondent pas! Vérifiez", {
                variant: "error",
                autoHideDuration: 3000,
            });
        }, 1000);
    } else {
        try {
            const response = await axios.post("http://16.171.24.180:8000/users/register/", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                first_name: formData.first_name,
                last_name : formData.last_name,
                is_superuser : false,
                is_staff: false,
            });
            if(response.status >= 200 && response.status <= 300) {
                setLoading(false);
                enqueueSnackbar("Compte créé avec succès! Vous allez être redirigé vers la page de connexion. Connectez vous maintenant ou faites le ultérieurement", {
                    variant: "success",
                    autoHideDuration: 3000,
                });
                setTimeout(() => {
                    navigate("/travel-website/login/");
                }, 2000);
            }
        } catch (error) {
            const status = error.response?.status;
            switch (status) {
                case 500:
                    setLoading(false);
                    enqueueSnackbar("Erreur interne du serveur pendant la création du compte", {
                        position: "top-center",
                        variant: "error",
                        autoHideDuration: 3000,
                    });
                    break;
                case 404:
                    setLoading(false);
                    enqueueSnackbar("La ressource requise est injoignable actuellement", {
                        position: "top-center",
                        variant: "error",
                        autoHideDuration: 3000,
                    });
                    break;
                case 403:
                    setLoading(false);
                    enqueueSnackbar("Forbiden", {
                        position: "top-center",
                        variant: "error",
                        autoHideDuration: 3000,
                    });
                    break;
                case 401:
                    setLoading(false);
                    enqueueSnackbar("Non autorisé", {
                        position: "top-center",
                        variant: "error",
                        autoHideDuration: 3000,
                    });
                    break;
                case 400:
                    setLoading(false);
                    enqueueSnackbar("Mauvaise requête!  " + error.response?.data.details, {
                        position: "top-center",
                        variant: "error",
                        autoHideDuration: 3000,
                    });
                    break;

            
                default:
                    setLoading(false);
                    enqueueSnackbar("Une erreur innatendue nous empêche de procéder à votre requête", {
                        position: "top-center",
                        variant: "error",
                        autoHideDuration: 3000,
                    })
                    break;
            }
        }
    }
    console.log('Form submitted:', formData);
    };

    return (
    <Container maxWidth="sm">
        <form onSubmit={handleSubmit} style={{ border: "none", padding: "1rem", margin: "1rem", position: "relative"}} id='signUpForm'>
        <div className='row mb-3 justify-content-center align-items-center'>
            
            <div className='card' style={{ padding: "2rem", background: "white", border: "hidden"}}>
                <a href='/travel-website/' className='btn btn' style={{ width: "50px", border: "none"}}><i className='bi bi-arrow-left'></i></a>
                <div className='row'>
                    <div className='col'>
                        <div className='row' style={{borderTopRightRadius: "30%", borderTopLeftRadius: "30%"}}>
                            <h2 className='text-justify' style={{ color: "blue", fontSize: "50px", fontFamily: "Segoe UI Light", fontWeight: "bold", textTransform: "uppercase"}}>Inscrivez-vous</h2>
                        </div>

                        <br />
                        <div className='row mb-2'>
                            <FormLabel style={{ fontWeight: "bold", fontFamily: "Segoe UI Light"}}>Identifiant <AccountCircle style={{ color: "mediumpurple", float: "left,", marginRight: "15px"}}/></FormLabel>
                            <FormControl 
                                type='text'
                                name='username'
                                value={formData.username}
                                onChange={(e) => handleInputChange(e)}
                                required


                            />
                        </div>

                        <div className='row mb-2'>
                            <FormLabel style={{ fontWeight: "bold", fontFamily: "Segoe UI Light"}}>Adresse email <Email style={{ color: "mediumpurple", float: "left,", marginRight: "15px"}}/></FormLabel>
                            <FormControl 
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={(e) => handleInputChange(e)}
                                required


                            />
                        </div>

                        <div className='row mb-2'>
                            <FormLabel style={{ fontWeight: "bold", fontFamily: "Segoe UI Light"}}>Mot de passe <Password style={{ color: "mediumpurple", float: "left,", marginRight: "15px"}}/></FormLabel>
                            <FormControl 
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={(e) => handleInputChange(e)}
                                required

                            />
                        </div>

                        <div className='row mb-2'>
                            <FormLabel style={{ fontWeight: "bold", fontFamily: "Segoe UI Light"}}>Confirmation du mot de passe <Password style={{ color: "mediumpurple", float: "left,", marginRight: "15px"}}/></FormLabel>
                            <FormControl 
                                type='password'
                                name='confirm_password'
                                value={formData.confirm_password}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        <br />
                            <h5 style={{ color: "blue", fontWeight: "bold"}}> Informations personnelles</h5>

                            <br />
                            <div className='col'>
                                <FormLabel style={{ fontWeight: "bold", fontFamily: "Segoe UI Light"}}>Nom</FormLabel>
                                <FormControl 
                                    type='text'
                                    name='first_name'
                                    value={formData.first_name}
                                    onChange={(e) => handleInputChange(e)}
                                    required

                                />
                            </div>

                            <div className='col'>
                                <FormLabel style={{ fontWeight: "bold", fontFamily: "Segoe UI Light"}}>Prenom</FormLabel>
                                <FormControl 
                                    type='text'
                                    name='last_name'
                                    value={formData.last_name}
                                    onChange={(e) => handleInputChange(e)}
                                    required

                                />
                            </div>
                        <br /> 
                    </div>
                    
                    <Button type='submit' variant='success' className='text-center'> {loading ? (<Spinner /> ) : "M'inscrire "}</Button>
                    <p className='text-center'>Déjà inscrit ? <a href="/login" className='text-center'>Connectez-vous</a></p>
                    
                    <div className='row'>
                        <p className='col-md-12 text-justify' style={{ fontFamily: "Segoe UI Light", fontSize: "15px", color: "gray", marginTop: "1rem"}}>
                            En fournissant vos données, vous comprenez qu'elles seront utilisées pour vous identifier sur la plateforme et pour toutes vos opérations en rapport avec vos futures demandes et interactions sur la plateforme<br />
                            <span style={{ fontWeight: "bold", color: "black"}}>Nb:</span> <span style={{ color: "crimson"}}>Les personnes de moins de 18 ans doivent se faire accompagner de leur tuteur légal pendant toute la procédure</span>.
                        </p>
                    </div>

                </div>
                
            </div>
        </div>
        </form>
    </Container>
    );
};

export default SignUpForm;