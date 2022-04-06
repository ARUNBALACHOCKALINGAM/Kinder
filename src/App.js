import "./App.css";
import ChooseRole from "./components/ChooseRole/ChooseRole";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CampaignList from "./components/CampaignList/CampaignList";
import CampaignCard from "./components/CampaignList/CampaignCard";
import CreateCampaign from "./components/CreateCampaign/CreateCampaign";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import NavBar from "./components/UI/NavBar/NavBar";
import LeaderboardProp from "./components/Leaderboard/LeaderboardProp";
import HistoryProp from "./components/History/HistoryProp";
import FavoritesProp from "./components/Favourite/FavoritesProp";
import Sidebar from "./components/Sidebar/Sidebar";
import Csrpartner from "./layouts/Csrpartner";
import Donor from "./layouts/Donor";
import { useState } from "react";
import Login from "./components/Login/Login";

import Axios from "axios";
import Campaign from "./components/Campaign/Campaign";
Axios.defaults.baseURL ="http://localhost:5000/";


function App() {

  


  return (
    <div className="App">
      <Header />
      <Router>
         <Routes>
           <Route path="/" element={<ChooseRole/>}/>
           <Route path="/login/csrpartner" element={<Login role="csrpartner"/>}/>
           <Route path="/login/donor" element={<Login role="donor" />}/>
           <Route path="/csrpartner" element={<Csrpartner/>}>
             <Route path="/csrpartner/campaignhistory" element={<CampaignList/>}/>
             <Route path="/csrpartner/createcampaign" element={<CreateCampaign/>}/>
           </Route>

           <Route path="/donor" element={<Donor/>}>
             <Route path="/donor/leaderboard" element={<LeaderboardProp/>}/>
             <Route path="/donor/history" element={<HistoryProp/>}/>
             <Route path="/donor/favorites" element={<FavoritesProp/>}/>
             <Route path="/donor/:id" element={<Campaign/>}/>
           </Route>



         </Routes>
      </Router>
    </div>
  );
}

export default App;
