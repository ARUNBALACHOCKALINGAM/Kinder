import React from "react";
import Button from "../Button/Button";

const Card = (props) => {

  return (
    <div
      className={`flex justify-center w-11/12  items-center mx-auto bg-white rounded-lg mt-5 shadow-xl shadow-acc/70 tablet:mt-20}`}
    >
      <div className="w-24 tablet:w-full">
        <img
          className="w-36 h-28 p-2 tablet:w-80 tablet:h-64 tablet:p-10 tablet:rounded-lg"
          src={props.data.image}
          alt={props.data.title}
        />
      </div>
      <div className=" tablet:text-left tablet:pt-10 tablet:pr-10 tablet:pl-10  desktop:pt-0 desktop:pl-0 desktop:pr-6">
        <h1 className="hidden tablet:hidden">Your request for</h1>
        <h1 className="text-sm font-semibold  font-mono whitespace-nowrap tablet:text-xl tablet:text-left desktop:text-2xl">
          {props.data.title}
        </h1>
        <p className="hidden tablet:block tablet:text-sm desktop:text-xl">
          {props.data.description}
        </p>
        <div className="w-32 h-5 bg-acc relative rounded-xl mt-2 table:mt-5 tablet:w-44 ">
          <div
            className={` w-${props.data.level} h-5 bg-sec rounded-xl mt-2 tablet:w-${props.data.level+4} desktop:${props.data.level+8}`}
          ></div>
        </div>
        <p className="text-xs font-mono text-medium  text-right mr-2 mt-1 tablet:mr-16 tablet:text-left desktop:text-sm">
          {props.data.completepercent}
        </p>
        <Button id={props.id} onChange={props.onClick} className="w-20 mx-auto mt-2 relative right-0 left-5 overflow-hidden text-center tablet:left-0 desktop:text-sm desktop:pt-0" label={props.action}/>
      </div>
    </div>
  );
};

export default Card;
