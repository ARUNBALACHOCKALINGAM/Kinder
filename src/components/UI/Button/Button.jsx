import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onChange}
      type={props.type}
      data-testid="toggle"
      id={props.id}
      className={` ${props.className} +   group-hover:shadow-xl font-regular text-sm font-mono group-hover:shadow-sec/70 hover:bg-sec hover:text-black  bg-purple text-white  rounded-lg tablet:w-48 tablet:h-10 tablet:text-l desktop:w-40  desktop:h-10 desktop:text-sm `}
    > 
    {props.icon} {props.label}
    </button>
  );
};

export default Button;
