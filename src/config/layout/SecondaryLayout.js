import React from "react";
import "./LayoutStyles.css";
import { HomeNavbar, MainHero, MainTopBar } from "../../components";

const SecondaryLayout = ({ children, title }) => (
    <div className="secondary-layout">
        <MainTopBar />
        <MainHero pageTitle={title}/>
        <HomeNavbar />
        {/** En tête des pages secondaires */}
            <main>
                { children }
            </main>
    </div>
);

export default SecondaryLayout;