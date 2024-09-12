import React from "react";
import { ManagerActivity, ManagerJoin, ManagerWebsiteEstate, ManagerWelcome } from "../../../components";

const ManagerDashboard = () => {

    return (
        <div className="dashboard" style={{ display: "grid"}}>
            <ManagerWelcome />
            <div style={{display: "grid", marginTop: "2rem", padding: "0.5rem"}}>
                <div className="row">
                    <div className="col-8">
                        <ManagerWebsiteEstate />
                        <br />
                        <br />
                        <ManagerActivity />
                    </div>

                    <div className="col-4" >
                        <ManagerJoin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;