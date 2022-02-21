import React from "react";
import pic1 from "../../assets/img/d1.png";
import pic2 from "../../assets/img/edu.png";
import pic3 from "../../assets/img/flood.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "../UI/Card/Card";

const data = [
  {
    image: pic3,
    title: "Help Flood Victims of Kerala",
    description: " Desc for flood victims",
    completepercent: "43% completed",
    level:20,
    active: 1,
  },
  {
    image: pic2,
    title: "Provide education for xyz",
    description: " Desc for education",
    completepercent: "43% completed",
    level: 20,
    active: 2,
  },
  {
    image: pic1,
    title: "Feed families in rajasthan",
    description: " Desc for food",
    completepercent: "43% completed",
    level: 20,
    active: 3,
  },
];

function LeaderboardProp() {
  return (
    <>
      <h1
        className="Leaderboard-title"
        class="font-extrabold text-6xl w-fit-content m-auto text-center text-whitesmoke font-mono mobile:text-4xl"
      >
        Leaderboard
      </h1>
      <p
        className="Leaderboard-quote"
        class="text-purple text-2xl m-auto text-center w-fit-content p-5 font-mono font-bold mobile:text-lg mobile:italic"
      >
        "We ourselves feel that what we are doing is just a drop in the ocean.
        But the ocean would be less because of that missing drop." -Mother
        Teresa
      </p>
      <p
        className="Leaderbaord-motivation"
        class="text-white text-xl font-mono mobile:text-sm font-bold"
      >
        <center>
          Khyati, You were in the top 1% of our generous donors this week!
        </center>
      </p>
      <div className="flex w-5/6 mx-auto flex-wrap desktop:w-1/2 tablet:flex-wrap">
        {data.map((content) => {
          return <Card  data={content} action="Donate" />;
        })}
      </div>
    </>
  );
}

export default LeaderboardProp;
