import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import './LoginForm.css'; // Importer le fichier CSS
import managerlogo from "../../../../assets/images/manager-logo.png";
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password,
      }, {
        headers: {
            'Content-Type': 'application/json',
          }
      });
      const { jwt } = response.data;
      localStorage.setItem('jwt', jwt);
      enqueueSnackbar("Réussite", {
        variant: "success",
        autoHideDuration: "3000",
      });
      setError('');
      setTimeout(() => {
        navigate("/website-manager/admin/welcome");
      }, 3500);
    } catch (err) {
      console.error('Erreur de connexion :', err);
      setError('Identifiant ou mot de passe incorrect');
      setSuccess('');
    }
  };

  return (
    <div className="card-container">
      <div className="card-custom">
        <div className="card-header">
          <img src={managerlogo} alt="Strapi Logo" /> {/* Remplace par le chemin vers ton icône */}
          <h3 style={{color: "cyan"}}>Website Content Manager</h3>
          <p>Connectez-Vous</p>
        </div>
        <Form onSubmit={handleSubmit} style={{textAlign: "left"}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <br />
          <br />
          <Button variant="primary" type="submit" style={{float: "right"}}>
            Connexion
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
