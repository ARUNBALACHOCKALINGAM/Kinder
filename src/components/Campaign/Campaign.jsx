import React,{useEffect,useState}from "react";
import { useParams,useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import axios from "axios";
import {FaRegHeart} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'


function Campaign() {

  const {id} = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const [fav,setFav] = useState(false);

  useEffect(async ()=>{
    const response =  await axios.get(`/getCampaign/${id}`, {  
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
     },
    })
    setData(response.data);
    console.log(response.data);
    console.log(data['camp_images']);
  },[])

  const handleBack = ()=>{
    navigate('/donor/favorites')
  }

  


  return (
    <div className="w-11/12 mx-auto mt-10 rounded overflow-hidden shadow-lg">
        <div className="flex flex-row flex-nowrap overflow-x-scroll">
                {data['camp_images']== undefined ? "" : data['camp_images'].images.map((img) => {
                  return (
                    <img
                      className="max-w-52 max-h-40 border-2 border-lav relative bottom-4 ml-2"
                      src={img}
                      alt="campaign image"
                      accept="image/*"
                    ></img>
                  );
                })}
              </div>  
      <div className="px-6 py-4">
        <div className="font-bold flex text-xl mb-2 text-left">
          {data['camp_title']}

          {fav ?   <FaHeart color="#5A287D" onClick={()=>setFav(prev => !prev)}  style={{marginTop:10}}/> :    <FaRegHeart  color="#5A287D" onClick={()=>setFav(prev => !prev)} style={{marginTop:10}}/>}
         
        </div>
        <p className="text-gray-700 text-base text-left">
       {data['camp_description']}
        </p>
      </div>
      <input
              className="mt-10 w-11/12 p-2 rounded-lg shadow-xl relative bottom-8 "
              type="text"
              placeholder="₹ Enter Donation amount"
            
            />
      <div className="flex flex-nowrap px-6 pt-2 pb-2">
      <Button
              className="mt-6 ml-9 mr-3 p-2 shadow-xl relative bottom-8"
              onChange={handleBack}
              label="Go back"
            />
        <Button
              className="mt-6 ml-4 flex-1 p-2 shadow-xl relative bottom-8"
              label="Donate"
            />
      </div>
    </div>
  );
}

export default Campaign;
