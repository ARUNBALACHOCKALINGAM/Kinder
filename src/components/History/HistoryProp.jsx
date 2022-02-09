import React from 'react';
import History from './History.jsx';

const data = [
  {
    Title:"Feed Families in Rajasthan",
    Description:" Desc for rajasthan",
    Donation:"100",
    Payment:"Successful",
    Confirm_stat:"Pending",
    Date:"02/2/2022",
  },
  {
    Title:"Provide Education for xyz",
    Description:" Desc for edu",
    Donation:"60",
    Payment:"Successful",
    Confirm_stat:"Successful",
    Date:"02/5/2021",
  }
]

function HistoryProp() {
  return (
      <>
      
    <div class="max-w mx-auto">
       
    <div class="flex flex-col mt-4 mx-auto justify-center item-center">
    <h1 className="History-title"  class="text-whitesmoke text-6xl text-center font-extrabold font-mono"> Donation History  </h1>  
     <p className="History-quote" class="text-purple text-3xl text-center font-mono font-extrabold">"Your one click saved a lot of lives. Thankyou!"</p>
     </div>
      
     <div class="flex mx-auto justify-center items-center px-10 py-10  flex-col md:flex-row rounded-8 items-stretch w-full font-mono space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div class="flex flex-col mx-auto px-5 py-10 md:p-6 xl:p-8 w-1/2 bg-white dark:bg-gray-800 space-y-6 ">
          <h3 class="text-2xl text-purple  font-extrabold leading-5 text-gray-800 font-mono ">Summary</h3>
          <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
           
           
            <div class="flex justify-between items-center w-full">
              <p class="text-black font-mono text-xl leading-4 ">No of donations made</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">2</p>
            </div>
          </div>
          <div class="flex justify-between items-center w-full font-mono text-xl">
            <p class="text-base  font-extrabold leading-4 text-gray-800 font-mono">Total</p>
            <p class="text-base  font-extrabold leading-4 text-gray-600 font-mono">$160.00</p>
          </div>
        </div>
               
            </div>
            
    <History data={data} />

      </div>
      </>
  )
}

export default HistoryProp;