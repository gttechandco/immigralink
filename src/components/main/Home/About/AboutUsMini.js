import React, { useEffect, useState } from "react";
import "./AboutUsMini.css";
import imageabout from "../../../../assets/images/ajouter-image.jpg"

const AboutUsMini = () => {
    const [sectionInfo, setSectionInfo] = useState({
        sectionTitle: "",
        sectionDescription: "",
        sectionImageUrl: "",
    });

    useEffect(() => {
        // Appel à l'api
        /*const fetchSectionInfos = async() => {
            try {
                const infoSections = await fetch().then();
                setSectionInfo(infoSections.body);
            } catch (error) {
                console.error("Une erreur s'est produite");
            }
        }

        fetchSectionInfos();*/
        setSectionInfo(sectionInfo);
    }, [sectionInfo]);

    return (
        <section className="aboutus-mini row">
            <div className="aboutus-left-side col-6">
                <h2 className="section-title">
                    {sectionInfo.sectionTitle !== "" ? sectionInfo.sectionTitle : "Titre de la section A Propos"}
                </h2>

                <p className="section-description" >
                    {sectionInfo.sectionDescription !== "" ? sectionInfo.sectionDescription : "Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit amet"}
                </p>
            </div>

            <div className="aboutus-right-side col-6">
                <img className="about-image" src={sectionInfo.sectionImageUrl !== "" ? sectionInfo.sectionImageUrl : imageabout} alt="about"/>
            </div>
        </section>
    );
};

export default AboutUsMini;