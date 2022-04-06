import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Card from "../UI/Card/Card";



function LeaderboardProp() {
 
  const [data,setData] = useState([]);
  useEffect(async ()=>{
    const response =  await axios.get("http://localhost:5000/getCampaigns?id=1", {  
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
     },
    })
    setData(response.data);
    console.log(response.data);
  },[])

  return (
    <>
      <h1
        className="Leaderboard-title"
        class="font-extrabold text-6xl w-fit-content m-auto text-center text-whitesmoke font-mono mobile:text-4xl"
      >
        Leaderboard
      </h1>
      <p
        className="Leaderboard-quote"
        class="hidden mt-5 text-purple text-l m-auto text-center w-fit-content p-5 font-mono font-bold mobile:text-lg mobile:italic"
      >
        "We ourselves feel that what we are doing is just a drop in the ocean.
        But the ocean would be less because of that missing drop." -Mother
        Teresa
      </p>
      <p
        className="Leaderbaord-motivation"
        class="text-white mx-auto w-2/3 mt-5 text-xl font-mono mobile:text-sm font-bold"
      >
        <center>
          Khyati, You were in the top 1% of our generous donors this week!
        </center>
      </p>
      <div className="flex w-5/6 mx-auto flex-wrap desktop:w-1/2 tablet:flex-wrap">
        {data.map((content) => {
          return <Card  data={content} action="Donate" />;
        })}
      </div>
    </>
  );
}

export default LeaderboardProp;
