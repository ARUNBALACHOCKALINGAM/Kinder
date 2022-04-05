import React from "react";
import Button from "../Button/Button";

const Card = (props) => {

  console.log((props.data.camp_amt_raised/props.data.camp_amt_requested)*100);
  let level = (props.data.camp_amt_raised/props.data.camp_amt_requested)*100<=50 ? 16 : 8;

  return (
    <div
      className={`flex justify-center w-full items-center mx-auto bg-white rounded-lg mt-5 shadow-xl shadow-acc/70 tablet:mt-20}`}
    >
      <div className="w-full tablet:w-full relative left-4 ">
        <img
          className="w-42 h-28 pt-2 pb-2  tablet:w-80 tablet:h-64 tablet:p-10 tablet:rounded-lg"
          src={props.data.camp_images.images[0]}
          alt={props.data.camp_title}
        />
      </div>
      <div className="w-2/3 text-left  p-4 relative left-0 tablet:text-left">
        <h1 className="hidden tablet:hidden">Your request for</h1>
        <h1 className="text-sm font-semibold  font-mono  tablet:text-xl tablet:text-left desktop:text-2xl">
          {props.data.camp_title}
        </h1>
        <p className="hidden tablet:block tablet:text-sm desktop:text-xl">
          {props.data.camp_description}
        </p>
        <div className="w-32 text-left h-5 bg-acc relative rounded-xl mt-2 table:mt-5 tablet:w-44 ">
          <div
            className={`w-${level} h-5 bg-sec rounded-xl mt-2 tablet:w-${level+4} desktop:${level+8}`}
          ></div>
        </div>
        <p className="text-xs font-mono text-medium  mr-2 mt-1 tablet:mr-16 tablet:text-left desktop:text-sm">
          {(props.data.camp_amt_raised/props.data.camp_amt_requested)*100}% completed
        </p>
        <Button id={props.data._id} onChange={props.onClick} className="w-20  mt-2 relative right-0 left-0 overflow-hidden  tablet:left-0 desktop:text-sm desktop:pt-0" label={props.action}/>
        
      </div>
    </div>
  );
};

export default Card;
