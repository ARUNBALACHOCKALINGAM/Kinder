import logo from './logo.svg';
import './App.css';
import ChooseRole from './components/ChooseRole/ChooseRole';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Error from './components/Error/Error';
import CampaignList from './components/CampaignList/CampaignList';

function App() {
  return (
  <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<ChooseRole/>}/>
        <Route path="/CSRpartner" element={<CampaignList/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
