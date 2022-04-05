import React, { useState,useEffect } from "react";

//assets
import campaignimage from "../../assets/img/image2.jpg";
import campaignimage2 from "../../assets/img/campaignpic1.png";
import Axios  from "axios";
import Card from "../UI/Card/Card";
import Header from "../Header/Header";
import axios from "axios";


const CampaignCard = () => {
  const [data, setData] = useState([]);

  const endCampaign = (e) => {
    console.log(e.target.id);
    setData((value) =>
      value.filter((item) => item._id!=e.target.id)
    );
  };


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
      <div className="flex w-5/6 mx-auto flex-wrap desktop:w-1/2 tablet:flex-wrap">
        {data.map((content) => {
          return (
            <>
              <Card
                id={content._id}
                onClick={endCampaign}
                data={content}
                action="End"
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default CampaignCard;
