
import './App.css';
import ChooseRole from './components/ChooseRole/ChooseRole';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CampaignList from './components/CampaignList/CampaignList';
import CampaignCard from './components/CampaignList/CampaignCard';
import CreateCampaign from './components/CreateCampaign/CreateCampaign';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import NavBar from './components/UI/NavBar/NavBar';

import Leaderboard_prop from './components/Leaderboard/LeaderboardProp';
import History_prop from './components/History/HistoryProp';
import Favorites_prop from './components/Favourite/FavoritesProp';

function App() {
  return (
  <div className='App'>
    <Header/>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ChooseRole/>}/>
        <Route path="/campaignhistory" element={<CampaignList/>}/>
        <Route path="/createcampaign" element={<CreateCampaign/>}/>
        <Route path='/leaderboard' exact element={<Leaderboard_prop />} />
          <Route path='/history' element={<History_prop />} />
         <Route path='/favorites' element={<Favorites_prop/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
