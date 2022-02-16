import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "../components/UI/NavBar/NavBar";
import { DonorRoutes as routes } from "../routes";
import HistoryProp from "../components/History/HistoryProp";
import LeaderboardProp from "../components/Leaderboard/LeaderboardProp";

const switchRoutes = (
    <Routes>
      {routes.map((prop, key) => {
        if (prop.layout === "/donor") {
          return (
            <Route
              path={prop.layout + prop.path}
              element={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
    
    </Routes>

);

console.log(switchRoutes);

const Donor = (props) => {
  return (
    <div>
      <NavBar routes={routes} />
      
    </div>
  );
};

export default Donor;
