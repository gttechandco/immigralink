import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";
import axios from "axios";
import { useSnackbar } from "notistack";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const enqueueSnackbar = useSnackbar();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Vérifier si le cookie correspond au nom recherché
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
let csrftoken = getCookie('csrftoken');

  const handlechangeData = (e) => {
    setUserData((prevData) => {
      const updatedData = {
        ...prevData,
        [e.target.name]:e.target.value,
      }
      return updatedData;
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    // Ajoute ici la logique de connexion
    setLoading(true);
    try {
      const response = await axios.post("http://16.171.24.180:8000/users/login/", {
        username: userData.email,
        password: userData.password,
      }, {
        headers: {
          'X-CSRFToken': csrftoken
        }
      });
      if(response.status >= 200 && response.status <= 300) {
        setLoading(false);
        localStorage.setItem("uid", response.data.user.id);
        setTimeout(() => {
          navigate("/travel-website/myspace/dashboard/");
        }, 1000);
      } else {
        enqueueSnackbar("Une erreur innatendue nous empêche de continuer", {
          position: "top-center",
          variant: "error",
          autoHideDuration: 3000,
        });
      }
    } catch (error) {
      const status = error.response?.status;
      switch (status) {
        case 500:
          setLoading(false);
          enqueueSnackbar("Nous avons commis une faute!", {
            position: "top-center",
            variant: "error",
            autoHideDuration: 3000,
          })
          break;
        case 400:
          setLoading(false);
          enqueueSnackbar("Vérifiez vos données!", {
            position: "top-center",
            variant: "error",
            autoHideDuration: 3000,
          })
          break;
        case 404:
          setLoading(false);
          enqueueSnackbar("La ressource n'est pas trouvée!", {
            position: "top-center",
            variant: "error",
            autoHideDuration: 3000,
          })
          break;
        case 401:
          setLoading(false);
          enqueueSnackbar(error?.response.data.message, {
            position: "top-center",
            variant: "error",
            autoHideDuration: 3000,
          })
          break;
      
        default:
          break;
      }
    }
  };

  return (
    <Container className="justify-content-center align-items-center" id="loginForm">
      <Row className="justify-content-center align-items-center" style={{ height: "100vh"}}>
        <Card style={{ width: "500px"}} className="text-center">
        <a href='/travel-website/' className='btn btn' style={{ width: "50px", border: "none"}}><i className='bi bi-arrow-left'></i></a>
        <Col>
        <br /> <br />
          <h2 className="text-center" style={{ fontSize: "45px", textAlign: "justify"}}><span style={{ color: "mediumslateblue"}}>Connectez-vous </span><br /><p style={{ color:"seagreen", fontSize: "25px"}}>A votre espace client</p></h2>
          <br />
          <Form onSubmit={handleLogin} style={{ padding: "2rem"}}>
            <Form.Group controlId="formEmail">
              <Form.Label style={{ float: "left"}}>Nom d'utilisateur</Form.Label>
              <Form.Control name="email" value={userData.email} onChange={(e) => handlechangeData(e)} type="text" placeholder="Entrez votre adresse e-mail" required />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label style={{ float: "left"}}>Mot de passe</Form.Label>
              <Form.Control name="password" value={userData.password} onChange={(e) => handlechangeData(e)} type="password" placeholder="Entrez votre mot de passe" required />
            </Form.Group>
            <Form.Group controlId="formForgotPassword">
              <Form.Text className="text-right">
                <a href="/travel-website/forgotpassword?" style={{float: "left"}}>Mot de passe oublié ?</a>
              </Form.Text>
            </Form.Group>
            <br />
            <br />
            <Button variant="primary" type="submit" block >
              {loading ? (
                <Spinner />
              ) : (
                "Se connecter"
              )}
            </Button>
            <br />
            <p className='text-center'>Pas encore de compte ? <a href="/sign-up" className='text-center'>Inscrivez-vous</a></p>
            <br />
            <br />
            <br />
            <h4>Connectez-vous avec</h4>
          <Button variant="outline-primary" className="mr-2 mb-2" style={{ margin: "3px"}}>
            <i className="bi bi-facebook mr-1"></i> Facebook
          </Button>
          <Button variant="outline-danger" className="mr-2 mb-2" style={{ margin: "3px"}}>
            <i className="bi bi-google mr-1"></i> Google
          </Button>
          <Button variant="outline-info" className="mr-2 mb-2" style={{ margin: "3px"}}>
            <i className="bi bi-twitter mr-1"></i> Twitter
          </Button>
          </Form>
        </Col>
        </Card>
      </Row>
    </Container>
  );
};

export default LoginForm;
