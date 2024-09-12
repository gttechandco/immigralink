import React, { useEffect, useState } from "react";
import "./Hero.css";

const Herosection = () => {
    const [heroData, setHeroData] = useState({
        title: "",
        description: "",
        link1: "",
        link2: "",
        link3: "",
        imageUrl: "",
    });
    //const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        /*const fetchHeroData = async () => {
            try {
                const getHeroData = await fetch("http://localhost:1337/api/hero").then(Response);
                setHeroData(getHeroData.formData);
            } catch (error) {
                setErrorMessage("Une erreur nous empêche de récupérér les données", error);
            }
        }

        fetchHeroData();*/
        setHeroData(heroData);
    }, [heroData]);

    return (
                <section 
                    className="hero-section"
                    style={{ backgroundImage: `url(${heroData.imageUrl})` }}
                >
                    <div className="hero-overlay"></div>

                    <div className="hero-content">
                        <h1 className="hero-title">
                            {heroData.title ? heroData.title : "Ajoutez un titre"}
                        </h1>
                        <p className="hero-description">
                            {heroData.description ? heroData.description : " Ajoutez une description"}
                        </p>

                        <div className="link-list">
                            <li>
                                {heroData.link1}
                            </li>

                            <li>
                                {heroData.link2}
                            </li>

                            <li>
                                {heroData.link3}
                            </li>
                        </div>
                    </div>
                    {/*errorMessage !== "" ? errorMessage : ""*/}
                </section>
    );
}

export default Herosection;