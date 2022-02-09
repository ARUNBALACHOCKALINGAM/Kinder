import React,{useState} from 'react';
import { BsBookmarkHeartFill } from "react-icons/bs";

function Favorites(props) {
  return (
    
    <div>
      <div class="flex flex-col justify-center w-4/5 h-1/10 p-10 cursor-pointer text-smitems-center ml-auto mr-auto mt-10 bg-white rounded-lg shadow-xl shadow-purple/50 tablet:flex-col tablet:w-52 tablet:h-40 desktop:h-52 hover:bg-yellow ">
       <div class=" max-w-full flex flex-row justify-around">
        <img src={props.image} class="w-130 h-1/2 rounded p-3" ></img>
         <div className="description" class="flex flex-col justify-around" >
           <div class="flex flex-row justify-between">
           <h1 class="font-bold text-xl mb-2 p-3 text-purple text-3xl font-mono" >{props.Title}</h1>
           <p><BsBookmarkHeartFill /></p>
           </div>
         
         <h2 class="font-bold text-xl mb-2 p-3 text-black font-mono"> {props.Description}</h2>
         <div>
         <div class="rounded-lg h-12 bg-whitesmoke">
        <div class="rounded-lg h-12 bg-purple " style={{width: `${props.Donation}%`}}> 
         </div></div>
        <h1 class="font-extrabold"> {props.Donation}% </h1>
        <input type="submit"  value="Donate" class="bg-purple border-gray text-2xl mt-3 w-1/2 mb-5 p-5 pl-10  rounded-lg border-1 border-solid uppercase  flex  w-full text-white shadow-purple shadow-lg cursor-pointer font-mono text-center"></input>
         </div>
         </div>
       </div>
        
       </div>
    </div>
    
  );
}

export default Favorites;
