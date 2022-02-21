import React, { useEffect } from "react";
import CampaignList from "../components/CampaignList/CampaignList";
import CreateCampaign from "../components/CreateCampaign/CreateCampaign";
import NavBar from "../components/UI/NavBar/NavBar";
import { Routes,Route, useNavigate, Outlet } from "react-router-dom";
import { CsrpartnerRoutes } from "../routes";
import ChooseRole from "../components/ChooseRole/ChooseRole";

const Csrpartner = () => {


  const navigate = useNavigate();

  useEffect(() => {
    navigate("/csrpartner/campaignhistory");
  }, []);

  return (
    <div>
      <NavBar name="Csrpartner" />
      <Outlet/>
    </div>
  );
};

export default Csrpartner;
