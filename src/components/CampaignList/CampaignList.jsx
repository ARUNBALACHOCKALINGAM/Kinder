import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

import Button from "../UI/Button/Button";
import CampaignCard from "./CampaignCard";

const CampaignList = () => {
  return (
    <div className="h-full">
      <div className=" overflow-hidden">
        <div className="flex flex-col w-5/6  mx-auto flex-wrap laptop:w-[640px] desktop:w-[720px] tablet:flex-wrap">
          <div className=" flex flex-col justify-center items-center mx-auto  rounded-lg mt-5 tablet:mt-10 tablet:w-11/12 tablet:p-4 desktop:w-5/6 ">
         
            <Link to="/csrpartner/createcampaign">
              <Button
                className="mt-2 mb-2 w-52 p-2 relative left-0 text-sm tablet:mt-6 desktop:left-0 "
                label="Create campaign"
              />
            </Link>
            <h1 className="text-xl font-semibold pt-2 pr-11 pl-11  font-mono text-white whitespace-nowrap mt-0 tablet:text-3xl desktop:text-3xl desktop:pr-1 desktop:pl-1">
              Campaign history
            </h1>
          </div>
        </div>
        <CampaignCard />
      </div>
    </div>
  );
};

export default CampaignList;
