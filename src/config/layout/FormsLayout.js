import React from "react";
import "./LayoutStyles.css";

const FormLayout = ({ children }) => (
    <div className="form-layout">
        {/** En tête du layout principal */}
        <main>
            {/** Contenu du layout */}
            { children }
        </main>
        {/** Pied de page du layout principal */}
    </div>
);

export default FormLayout;