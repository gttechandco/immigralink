import React, { useEffect, useState } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [username, setUsername] = useState(""); 
    const [userImage, setUserImage] = useState("");

    const [links, setLinks] = useState([]);
    //const [errorMessage, setErrorMessage] = ("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        /*const fetchLinks = async () => {
            try {
                const getLinks = await fetch().then();
                setLinks(getLinks.formData);
            } catch (error) {
                setErrorMessage("Nous ne parvenons pas à récupérer les liens");
            } finally {
                setLoading(false);
            }
        }

        fetchLinks();*/
        setLoading(false);
        setLinks(links);
        setUsername(username);
        setUserImage(userImage);
        setIsLoggedIn(isLoggedIn);
    }, [links, isLoggedIn, username, userImage]);

    return (
        <div className="navbar">
            <ul className="nav-list">
                {links === "" ? (
                    links.map((link, index) => {
                        return (
                            loading ? <Spinner /> : <ListItem key={index} button="true" component={Link} to={link.url} className="nav-element">
                            <ListItemIcon>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText primary={link.name}/>
                        </ListItem>
                        )
                    })
                ) : (
                    <div>
                        <ListItem button="true" component={Link} to="/" className="nav-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-house"></i>
                                <ListItemText className="list-text" primary="Accueil" />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button="true" component={Link} to="/about" className="nav-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-info-circle"></i>
                                <ListItemText className="list-text" primary="A propos" />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button="true" component={Link} to="/processes" className="nav-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-files"></i>
                                <ListItemText className="list-text" primary="Processus" />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button="true" component={Link} to="/services" className="nav-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-list-nested"></i>
                                <ListItemText className="list-text" primary="Services" />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button="true" component={Link} to="/team" className="nav-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-person-badge"></i>
                                <ListItemText className="list-text" primary="Equipe" />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button="true" component={Link} to="/contacts" className="nav-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-person-lines-fill"></i>
                                <ListItemText className="list-text" primary="Contacts" />
                            </ListItemIcon>
                        </ListItem>

                        <ListItem button="true" component={Link} to="/faq" className="nav-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-question-square"></i>
                                <ListItemText className="list-text" primary="F A Q" />
                            </ListItemIcon>
                        </ListItem>

                        {isLoggedIn ? (
                            <ListItem button="true" component={Link} to="/myaccount" className="nav-element">
                                <ListItemIcon className="list-icons">
                                    <i className="bi bi-person"></i>
                                    <ListItemText className="list-text" primary="Mon compte" />
                                </ListItemIcon>
                            </ListItem>
                        ) : (
                            <ListItem button="true" component={Link} to="/login" className="nav-element">
                                <ListItemIcon className="list-icons">
                                    <i className="bi bi-door-open-fill"></i>
                                    <ListItemText className="list-text" primary="Se connecter" />
                                </ListItemIcon>
                            </ListItem>
                        )}
                    </div>
                )}
            </ul>
        </div>
    );
};

export default Navbar;