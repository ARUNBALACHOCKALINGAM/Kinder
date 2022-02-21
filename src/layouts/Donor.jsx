import React, { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import FavoritesProp from "../components/Favourite/FavoritesProp";
import HistoryProp from "../components/History/HistoryProp";
import LeaderboardProp from "../components/Leaderboard/LeaderboardProp";
import NavBar from "../components/UI/NavBar/NavBar";
import { DonorRoutes } from "../routes";

const Donor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/donor/favorites");
  }, []);

  return (
    <div>
      <NavBar name="Donor" />
      <Outlet />
    </div>
  );
};

export default Donor;
