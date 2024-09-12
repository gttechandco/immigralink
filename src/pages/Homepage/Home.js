import React from "react";
import { HomeAboutUs, HomeBackToTop, HomeContactUs, HomeDestinations, HomeNewsLetter, HomeNumbers, HomePartners, HomeServices, HomeTeam } from "../../components";

const Home = () => {

    return (
        <div>
            <HomeAboutUs />
            <HomeServices />
            <HomePartners />
            <HomeDestinations />
            <HomeNumbers />
            <HomeTeam />
            <HomeContactUs />
            <HomeNewsLetter />
            <HomeBackToTop />
        </div>

    );
};

export default Home;