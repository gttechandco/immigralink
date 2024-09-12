import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

import "./Sidebar.css";

const AdminSidebar = () => {

    return (
        <aside>
            <div className="sidebar">
                <div className="sidebar-header">
                    <h4 className="sidebar-title">
                        Manager 
                    </h4>
                    <p className="sidebar-subtitle">Workplace</p>
                </div>
                <div className="sidebar-links">
                    <List className="adminLinks">
                        <ListItem button={true} component={Link} to="/website-management/global view/home" className="adminLinks-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-house-fill"></i>
                            </ListItemIcon>
                            <ListItemText className="list-text" primary="Vue d'ensemble"/>
                        </ListItem>    

                        <ListItem button={true} component={Link} to="/website-management/content/content-manager" className="adminLinks-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-pencil-square"></i>
                            </ListItemIcon>
                            <ListItemText className="list-text" primary="Gestion de contenus"/>
                        </ListItem>

                        <ListItem button={true} component={Link} to="/website-management/content/content-types-builder" className="adminLinks-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-body-text"></i>
                            </ListItemIcon>
                            <ListItemText className="list-text" primary="Types de contenus"/>
                        </ListItem>

                        <ListItem button={true} component={Link} to="/website-management/content/content-media-manager" className="adminLinks-element">
                            <ListItemIcon className="list-icons">
                                <i className="bi bi-collection-fill"></i>
                            </ListItemIcon>
                            <ListItemText className="list-text" primary="Bibliothèque de Medias"/>
                        </ListItem>

                    </List>
                </div>

            </div>
        </aside>
    );
};

export default AdminSidebar