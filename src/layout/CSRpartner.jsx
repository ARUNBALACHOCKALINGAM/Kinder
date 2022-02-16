import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import NavBar from '../components/UI/NavBar/NavBar';
import { CsrpartnerRoutes } from '../routes';
import CampaignList from '../components/CampaignList/CampaignList';

const switchRoutes = (
    <Router>
        <Routes>
      {CsrpartnerRoutes.map((prop, key) => {
        if (prop.layout === "/csrpartner") {
          return <Route path={prop.layout + prop.path} element={prop.component} key={key} />;
        }
        return null;
      })}
      </Routes>
    </Router>
  );


const CSRpartner = props => {
    return (
        <div>
           <NavBar routes={CsrpartnerRoutes}/> 
           <div>{switchRoutes}</div>
        </div>
    );
};



export default CSRpartner;