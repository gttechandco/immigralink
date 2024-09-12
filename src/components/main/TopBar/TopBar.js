import React, { useEffect, useState } from "react";
import "./TopBar.css";
import axios from "axios";

const TopBar = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Appels API pour récupérer les données
        const fetchAnnouncements = async () => {
            try {
                const announcementsResponse = await axios.get("http://localhost:1337/api/announcements");
                const phoneResponse = await axios.get("http://localhost:1337/api/contact-informations");

                // Mettez à jour les états avec les données appropriées
                setAnnouncements(announcementsResponse.data.data); // Notez que c'est un tableau
                setPhoneNumber(phoneResponse.data.data.length > 0 ? phoneResponse.data.data[0].attributes.phoneNumber : '');
            } catch (error) {
                setErrorMessage("Erreur lors du chargement des données");
            }
        };

        fetchAnnouncements();
    }, []);

    return (
        <div className="topbar row">
            {errorMessage !== "" ? 
                <div className="col-12">
                    <div className="scrolling-text">
                        {errorMessage}
                    </div>
                </div>
            : 
                <>
                    <div className="topbar-announcements col-8">
                        <div className="scrolling-text"> 
                            <p>{announcements.length > 0 ? announcements[0].attributes.message : "Aucune annonce pour le moment"}</p>
                        </div>
                    </div>

                    <div className="topbar-phone col-5">
                        <span> {phoneNumber !== "" ? phoneNumber : "+33 0 00 00 00 00"}</span>
                    </div>
                </>
            }
        </div>
    );
};

export default TopBar;
