import React from 'react'

import pic3 from "../../assets/img/flood.png";
import Favorites from './Favorites.jsx';

function FavoritesProp() {
  return (
      <>
    <div class="max-w">
    <div class="flex flex-col mt-4">
    <h1 className="History-title"  class="text-whitesmoke text-6xl text-center font-extrabold font-mono"> Favorites  </h1>  
     <p className="History-quote" class="text-purple text-3xl text-center font-mono font-extrabold">We see you felt connected with these causes,donate today and bring a smile on their face!</p>
     </div>
     </div>

    <Favorites
       
      image={pic3}
      Title="Help Flood Victims of Kerala"
      Description=" Desc for flood victims"
      Donation="43"
      />
     
    
    </>
  )
}

export default FavoritesProp;
