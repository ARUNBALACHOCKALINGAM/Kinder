import React, { useState } from "react";
import hand from "../../assets/img/Saly-31.png";
import Button from "../UI/Button/Button";
import logo from "../../assets/img/Group 36.svg";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Login = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const isRegistered = true;

  const loginHandler = async () => {
    try {
    
      const response = await Axios.post("/login", {
        name: username,
        password: password,
      });
      console.log(response);
      if(response.status==200 && response.statusText=="OK"){
        navigate(`/${props.role}`)
      }else{
        console.log("Enter valid credentials")
      }
    } catch (e) {
      console.log("There was a problem or the request was cancelled.");
    }
  };
  return (
    <div className="w-5/6 mx-auto">
      <div className="flex flex-col justify-center items-center mb-24 desktop:flex-row">
        <img
          className="w-64 mx-auto desktop:w-[600px] desktop:h-[600px] desktop:mx-0 desktop:mr-52 desktop:mb-20"
          src={hand}
        />

        {isRegistered ? (
          <div className="flex flex-col w-full justify-center items-center">
            <img className="hidden desktop:block desktop:w-40" src={logo} />
            <h1 className="text-white text-2xl desktop:text-lg desktop:mt-6 ">
              Welcome back
            </h1>
            <input
              className="mt-5 p-2 w-full rounded-lg shadow-lg desktop:mt-10 desktop:p-4 desktop:w-5/6"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="mt-5 p-2 w-full rounded-lg shadow-lg  desktop:p-4 desktop:mt-7 desktop:w-5/6"
              placeholder="Enter Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              onChange={loginHandler}
              className="mt-5 p-2 w-24 desktop:mt-10"
              label="Login "
            />
          </div>
        ) : (
          <div className="flex flex-col w-full justify-center items-center">
            <img className="hidden desktop:block desktop:w-40" src={logo} />
            <h1 className="text-white text-2xl desktop:text-lg desktop:mt-6 ">
              Welcome back
            </h1>
            <input
              className="mt-5 p-2 w-full rounded-lg shadow-lg desktop:mt-10 desktop:p-4 desktop:w-5/6"
              placeholder="Enter Natwest ID"
            />
            <input
              className="mt-5 p-2 w-full rounded-lg shadow-lg  desktop:p-4 desktop:mt-7 desktop:w-5/6"
              placeholder="Enter Username"
            />
            <input
              className="mt-5 p-2 w-full rounded-lg shadow-lg  desktop:p-4 desktop:mt-7 desktop:w-5/6"
              placeholder="Enter Password"
            />
            <Button
              onClick={() => navigate(`/${props.role}`)}
              className="mt-5 p-2 w-24 desktop:mt-10"
              label="Register "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
