import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onChange}
      type={props.type}
      data-testid="toggle"
      className={`w-32 h-6 group-hover:shadow-xl font-regular  font-mono group-hover:shadow-sec/70 hover:bg-sec hover:text-black  bg-purple text-white text-xs rounded-lg tablet:w-48 tablet:h-10 tablet:text-l desktop:w-40  desktop:h-10 desktop:text-sm + ${props.className}`}
    >
      {props.label}
    </button>
  );
};

export default Button;
