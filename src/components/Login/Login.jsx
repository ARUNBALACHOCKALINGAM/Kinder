import React from "react";
import hand from "../../assets/img/Saly-31.png";
import Button from "../UI/Button/Button";
import logo from "../../assets/img/Group 36.svg"
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  return (
    <div className="w-5/6 mx-auto">
      <div className="flex flex-col justify-center items-center mb-24 desktop:flex-row">
        <img className="w-64 mx-auto desktop:w-[600px] desktop:h-[600px] desktop:mx-0 desktop:mr-52 desktop:mb-20" src={hand} />
        <div className="flex flex-col w-full justify-center items-center">
        <img className="hidden desktop:block desktop:w-40" src={logo}/>
        <h1 className="text-white text-2xl desktop:text-lg desktop:mt-6 ">Welcome back</h1>
        <input className="mt-5 p-2 w-full rounded-lg shadow-lg desktop:mt-10 desktop:p-4 desktop:w-5/6" placeholder="Enter Natwest ID" />
        <input className="mt-5 p-2 w-full rounded-lg shadow-lg  desktop:p-4 desktop:mt-7 desktop:w-5/6" placeholder="Enter Password" />
        <Button onChange={()=>navigate(`/${props.role}`)} className="mt-5 p-2 w-24 desktop:mt-10" label="Login " />
        </div>
      </div>
    </div>
  );
};

export default Login;
