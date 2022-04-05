import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from "../UI/Card/Card";
import axios from "axios";


const FavoritesCard = (props) => {
  
  const navigate = useNavigate();


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
    <div>
      <div className="flex w-5/6 mx-auto flex-wrap desktop:w-1/2 tablet:flex-wrap">
        {data.map((content) => {
          return <Card data={content} action="View" onClick={()=>navigate(`/donor/${content._id}`)}/>;
        })}
      </div>
    </div>
  );
};

export default FavoritesCard;
