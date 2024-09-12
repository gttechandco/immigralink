import React from "react";
import "./LayoutStyles.css";
import { HomeNavbar, MainFooter, MainHero, MainTopBar } from "../../components";

const MainLayout = ({ children }) => (
    <div className="main-layout">
        {/** En tête du layout principal */}
        <MainTopBar />
        <MainHero pageTitle="Accueil"/>
        <HomeNavbar />
        <main>
            {/** Contenu du layout */}
            { children }
        </main>
        <MainFooter />
        {/** Pied de page du layout principal */}
    </div>
);

export default MainLayout;