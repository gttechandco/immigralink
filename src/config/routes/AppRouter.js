import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout";
import { FormLayout } from "../layout";
import { SecondLayout } from "../layout";
import { AdministrativeLayout } from "../layout";
import routes from "./roads/AppRoutes";

const ApplicationRouter = () => (
    <Router>
        <Routes>
            {
                routes.map((route, index) => {
                    const Layout = route.layout === "admin" ? AdministrativeLayout : route.layout === "second" ? SecondLayout : route.layout === "form" ? FormLayout : MainLayout;
                    const Component = route.component;
                    const location = route.childrenTitle;
                    return (
                        <Route 
                            key={index}
                            path={route.path}
                            element={<Layout title={location}><Component /></Layout>}
                        />
                    )
                })
            }
        </Routes>
    </Router>
);

export default ApplicationRouter;