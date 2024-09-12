// src/components/Footer.js
import React, { useEffect, useState } from 'react';
import './Footer.css'; // Fichier CSS pour les styles
//import { fetchFooterContent } from '../services/api'; // Service pour récupérer les données du footer

const Footer = () => {
    const [footerData, setFooterData] = useState({
        usefulInfo: [],
        usefulLinks: [],
        agencyInfo: {
            logoUrl: '',
            description: '',
        },
        copyright: '',
    });

    useEffect(() => {
        // Appel API pour récupérer le contenu du Footer depuis Strapi
        /*const getFooterContent = async () => {
            try {
                const data = await fetch().then;
                setFooterData(data);
            } catch (error) {
                console.error('Erreur lors du chargement des données du footer:', error);
            }
        };

        getFooterContent();*/
        setFooterData(footerData);
    }, [footerData]);

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-column col-4">
                    <h4>Informations Utiles</h4>
                    <ul>
                        {footerData.usefulInfo.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))}
                    </ul>
                </div>

                <div className="footer-column col-4">
                    <h4>Liens Utiles</h4>
                    <ul>
                        {footerData.usefulLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-column col-4">
                <img
                    src={footerData.agencyInfo.logoUrl}
                    alt="Logo de l'agence"
                    className="footer-logo"
                />
                    <p>{footerData.agencyInfo.description}</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-column col-4"></div>
                <div className="footer-column col-4">
                    <p>&copy; {new Date().getFullYear()} {footerData.copyright}</p>
                </div>
                <div className="footer-column col-4"></div>
            </div>
        </footer>
    );
};

export default Footer;
