import React from 'react';
import pic1 from "../../assets/img/d1.png";
import pic2 from "../../assets/img/edu.png";
import pic3 from "../../assets/img/flood.png";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from './Leaderboard.jsx';

function LeaderboardProp() {
  return (
    <>
   
      <h1 className="Leaderboard-title" class="font-extrabold text-6xl w-fit-content m-auto text-center text-whitesmoke font-mono"> Leaderboard  </h1>  
     <p className="Leaderboard-quote" class="text-purple text-2xl m-auto text-center w-fit-content p-5 font-mono font-bold">"We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop."
-Mother Teresa</p>
<p className="Leaderbaord-motivation" class="text-white text-xl font-mono"><center>Khyati, You were in the top 1% of our generous
donors this week!</center></p>
    <Leaderboard 
       
      image={pic1}
      Title="Feed Families in Rajasthan"
      Donation="70"
      Desc="Description for feeding families"
      />
      <Leaderboard 
      image={pic2}
      Title="Provide Education for xyz"
      Donation="60"
      Desc="Description for feducation kids from xyz place"
      />
      <Leaderboard 
      image={pic3}
      Title="Help Flood Victims in VIT"
      Donation="50"
      Desc="Description for helping flood victims"
      />
    

    </>
  )
}

export default LeaderboardProp;
