import React from "react";
import Card from "../UI/Card/Card";
import pic3 from "../../assets/img/flood.png";

const data = [
  {
    image: pic3,
    title: "Help Flood Victims",
    description: " Desc for flood victims",
    completepercent: "43% completed",
    level: "20",
    active: 1,
  },
];

const FavoritesCard = (props) => {
  return (
    <div>
      <div className="flex w-5/6 mx-auto flex-wrap desktop:w-1/2 tablet:flex-wrap">
        {data.map((content) => {
          return <Card data={content} action="View" />;
        })}
      </div>
    </div>
  );
};

export default FavoritesCard;
