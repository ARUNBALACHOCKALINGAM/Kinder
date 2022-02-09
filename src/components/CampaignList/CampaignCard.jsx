import React from "react";

//assets
import campaignimage from "../../assets/img/image2.jpg";
import campaignimage2 from "../../assets/img/campaignpic1.png";

import Card from "../UI/Card/Card";
import Header from "../Header/Header";


const data = [
  {
    image: campaignimage,
    title: "Donate for a cause",
    description: "describe the above campaign",
    completepercent: "60% completed",
    level: "20",
    active: 1,
  },
  {
    image: campaignimage2,
    title: "Feed the poor",
    description: "describe the above campaign",
    completepercent: "70% completed",
    level: "20",
    active: 2,
  },
  {
    image: campaignimage,
    title: "Donate for a cause",
    description: "describe the above campaign",
    completepercent: "60% completed",
    level: "20",
    active: 3,
  },
  {
    image: campaignimage,
    title: "Donate for a cause",
    description: "describe the above campaign",
    completepercent: "60% completed",
    level: "20",
    active: 4,
  },
];

const CampaignCard = () => {
  return (
    <>
    <div className="flex w-5/6 mx-auto flex-wrap desktop:w-1/2 tablet:flex-wrap">
      {data.map((content) => {
        return (
          <>
            <Card data={content} />
          </>
        );
      })}
    </div>
    </>
  );
};

export default CampaignCard;
