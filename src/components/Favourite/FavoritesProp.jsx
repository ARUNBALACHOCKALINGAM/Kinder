import React from "react";
import Card from "../UI/Card/Card";
import pic3 from "../../assets/img/flood.png";
import CampaignCard from "../CampaignList/CampaignCard";
import FavoritesCard from "./FavoritesCard";

function FavoritesProp() {
  return (
    <>
      <div className="h-full">
        <div className=" overflow-hidden">
          <div className="flex flex-col w-5/6  mx-auto flex-wrap laptop:w-[640px] desktop:w-[720px] tablet:flex-wrap">
            <div className=" flex flex-col justify-center items-center mx-auto  rounded-lg mt-5 tablet:mt-10 tablet:w-11/12 tablet:p-4 desktop:w-5/6 ">
             
              <h1 className="text-xl font-semibold pt-2 pr-11 pl-11  font-mono text-white whitespace-nowrap mt-0 tablet:text-3xl desktop:text-3xl desktop:pr-1 desktop:pl-1">
                Campaigns
              </h1>
            </div>
          </div>
          <FavoritesCard />
        </div>
      </div>
    </>
  );
}

export default FavoritesProp;
