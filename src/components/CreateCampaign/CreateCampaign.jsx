import React, { useState } from "react";
import Button from "../UI/Button/Button";

//assets
import pattern from "../../assets/img/pattern.svg";
import illustration from "../../assets/img/kid.svg";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const CreateCampaign = () => {
  const [formsubmit, setFormsubmit] = useState(true);

  const createCampaign = (e) => {
    e.preventDefault();
    setFormsubmit(false);
  };

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <h1 className="invisible absolute text-white top-48 left-24 desktop:visible">
        "Find donors through kinder more easily"
      </h1>
      <div className="flex flex-col mx-auto items-center justify-center desktop:w-8/12 desktop:bg-white desktop:ml-1/2 desktop:rounded-lg desktop:h-screen desktop:overflow-y-hidden desktop:mr-0 desktop:mt-10">
        {formsubmit ? (
          <div
            className="flex flex-col w-5/6 items-center  desktop:mb-24 "
          >
            <h1 className="mt-5 text-xl font-semibold text-purple desktop:text-3xl desktop:mt-0 ">
              Create a campaign
            </h1>
            <input
              className="bg-white mt-10 h-7 w-5/6 pl-3 placeholder-black rounded-xl shadow-lg shadow-black/30 text-purple desktop:w-8/12 desktop:h-10"
              type="text"
              placeholder="Enter title"
            />
            <input
              className="bg-white mt-10 h-7 w-5/6 pl-3 placeholder-black rounded-xl shadow-lg shadow-black/30 text-purple desktop:mt-10 desktop:w-8/12 desktop:h-10"
              placeholder="Enter description"
              type="text"
            />
            <div className="flex flex-col justify-center items-center">
            <input
              type="file"
              className="relative top-10 h-full w-full opacity-0"
              placeholder="Enter amount"
            />
             <Button className="pointer-events-none  shadow-lg shadow-black/30 relative left-0 desktop:h-14" label="Add files or videos"/>
            </div>
            <input
              className="bg-white w-5/6 shadow-lg shadow-black/30 desktop:w-8/12  mt-10 placeholder-black pl-3 rounded-lg h-7 text-purple desktop:mt-20 desktop:h-10"
              placeholder="Enter amount"
            />
            <Button
              onChange={createCampaign}
              className="mt-16 h-11 rounded-xl relative left-10 tablet:left-0"
              label="Create campaign"
            />
          </div>
        ) : (
          <div>
            <h1 className="text-xl mt-44 font-semibold text-purple desktop:text-3xl desktop:mb-10 ">
              Your campaign has been posted!
            </h1>
            <Link to="/campaignhistory">
              <Button className="mt-5 desktop:mb-20" label="Go back" />
            </Link>
          </div>
        )}
      </div>
      <img
        className="hidden absolute bottom-0 left-1 desktop:block"
        src={pattern}
        alt="pattern"
      />
      <img
        className="hidden absolute left-72 bottom-0  w-72 h-4/6 desktop:block"
        src={illustration}
        alt="kid with phone"
      />
    </div>
  );
};

export default CreateCampaign;
