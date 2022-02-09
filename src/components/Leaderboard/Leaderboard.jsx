import React, {useState} from 'react';



function Leaderboard(props) {
return (
      <>
      
      <div className="lb" class="flex flex-row justify-around max-h-1/4 max-w-full hover:bg-yellow hover:text-black rounded-lg p-5 m-5 mr-8 bg-lav shadow-lg">
         
        <img src={props.image} className="lb-image" class="w-1/4 h-1/4 block"></img>
        <div className="description" class="flex flex-col justify-between w-2/5 ">
        <h1 className="lb-title" class="text-3xl font-extrabold text-purple font-mono ">{props.Title}</h1>
        <p className="lb-explain" class="text-2xl font-extrabold text-black font-mono">{props.Desc}</p>
        <div>
        <h2 className="lb-donate" class="text-xl font:bold text-black font-mono">{props.Donation}%</h2>
        <div className="merc" class="w-4/5 h-10 bg-whitesmoke rounded-lg">

        <div className="merc-donation" class="h-10 bg-purple rounded-lg" style={{width: `${props.Donation}%`}}> 
        </div>
       
        </div>
        </div>
        </div>
      
    </div>
    </>
  );
}

export default Leaderboard;
