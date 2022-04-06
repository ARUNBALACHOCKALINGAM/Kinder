import React, { useState } from "react";
import Button from "../UI/Button/Button";

//assets
import pattern from "../../assets/img/pattern.svg";
import illustration from "../../assets/img/kid.svg";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { AiFillPicture } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import campaignimage from "../../assets/img/image2.jpg";
import axios from "axios";

const CreateCampaign = () => {
  const [formsubmit, setFormsubmit] = useState(true);

  const [campTitle,setCamptitle] = useState("");
  const [campDescription,setcampDescription] = useState("");
  const [campamtRaised,setCampamtRaised] = useState(0);
  const [campamtRequested,setCampamtRequested] = useState(0);
  const [campStatus,setCampStatus] = useState(true);
  const [image, setImage] = useState({ images: [] });

  const createCampaign = async (e) => {
    e.preventDefault();
    setFormsubmit(false);
    //add comments
    const response = await axios.post("/postCampaigns", {
      camp_title: campTitle,
      camp_description: campDescription,
      camp_amt_raised: 0,
      camp_amt_requested: campamtRaised,
      camp_status: true,
      camp_images: image,
      csrpartner_id:"1"
    });
    console.log(response);
  };

  const fileUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState == 2) {
        setImage((prevstate) => {
          return { images: prevstate.images.concat(reader.result) };
        });
      }
    };
    console.log(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="h-5/6 overflow-hidden">
      <h1 className="invisible absolute text-white top-48 left-24 desktop:visible">
        "Find donors through kinder more easily"
      </h1>
      <div className="flex flex-col mx-auto items-center justify-center desktop:w-8/12 desktop:bg-white desktop:ml-1/2 desktop:rounded-lg desktop:h-screen desktop:overflow-y-hidden desktop:mr-0 desktop:mt-0">
        {formsubmit ? (
          <div className="mt-2 w-full flex flex-col justify-center items-center ">
            <h1 className="text-xl font-bold text-purple ">
              Create a campaign
            </h1>
            <input
              className="w-5/6 mt-5 p-2 rounded-lg shadow-xl"
              type="text"
              placeholder="Enter title"
              onChange={(e)=>setCamptitle(e.target.value)}
            />
            <textarea
              className="mt-5 w-5/6 p-2 rounded-lg shadow-xl"
              id=""
              placeholder="Enter description"
              rows="4"
              onChange={(e)=>setcampDescription(e.target.value)}
            ></textarea>
            <div className="overflow-hidden relative w-5/6 mt-5 ">
              <button className="bg-purple hover:bg-indigo-dark text-white font-bold py-2 px-4 w-full inline-flex items-center rounded-lg shadow-xl">
                <span>
                  <AiFillPicture />
                </span>
                <span className="ml-2 w-5/6 text-medium">
                  Add images/videos
                </span>
              </button>
              <input
                className="cursor-pointer w-full h-10 relative bottom-10 opacity-0 "
                type="file"
                onChange={fileUpload}
                name="vacancyImageFiles"
                multiple
              />
              <div className="flex flex-row flex-nowrap overflow-x-scroll">
                {image.images.map((img) => {
                  return (
                    <img
                      className="max-w-52 max-h-40 border-dashed border-2 border-lav relative bottom-4 ml-2"
                      src={img}
                      alt="campaign image"
                      accept="image/*"
                    ></img>
                  );
                })}
              </div>
            </div>
            <input
              className="mt-5 w-5/6 p-2 rounded-lg shadow-xl relative bottom-8 "
              type="text"
              placeholder="₹ Enter amount"
              onChange={(e)=>setCampamtRaised(e.target.value)}
            />
            <Button
              className="mt-6 w-5/6 p-2 shadow-xl relative bottom-8"
              onChange={createCampaign}
              label="Post campaign"
            />
          </div>
        ) : (
          <div>
            <h1 className="text-xl mt-44 font-semibold text-purple desktop:text-3xl desktop:mb-10 ">
              Your campaign has been posted!
            </h1>
            <Link to="/csrpartner/campaignhistory">
              <Button
                className="w-5/6 p-2 mt-5 desktop:mb-20"
                label="Go back"
              />
            </Link>
          </div>
        )}
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
    </div>
  );
};

export default CreateCampaign;
