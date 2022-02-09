import React from "react";
import { Link} from "react-router-dom";


import donor from "../../assets/img/Asset 1@2x 1.png";
import donee from "../../assets/img/Illustration - pavan 697 (1).png";
import CSRpartner from "../../assets/img/image 19.png";


const roles = [
  {
    name: "Donor",
    image: donor,
    width: "14",
    fd: "flex-row",
    ml: 96,
    mr: "auto",
  },
  {
    name: "Donee",
    image: donee,
    width: "14",
    fd: "flex-row-reverse",
    ml: "auto",
    mr: "auto",
  },
  {
    name: "CSR partner",
    image: CSRpartner,
    width: "20",
    fd: "flex-row",
    ml: "auto",
    mr: 96,
  },
];

const ChooseRole = () => {

  return (
    <div>
      <div>
        <h1 className="font-semibold font-mono text-purple text-xl mt-5 text-center tablet:text-3xl desktop:text-4xl desktop:mt-16">
          Choose a role
        </h1>
      </div>
      <div className="mx-auto mt-10 tablet:flex flex-row desktop:w-2/3">
        {roles.map((role, index) => {
          return (
            <Link
              to={`/campaignhistory`}
              id={role.name}
              key={role.name}
              className={`flex  ${role.fd} justify-center w-64 h-24 items-center ml-auto mr-auto mt-10 bg-purple rounded-lg shadow-xl shadow-sec/70 tablet:flex-col tablet:w-52 tablet:h-40 desktop:h-52`}
            >
              <img
                className={`relative pointer-events-none  right-0 bottom-4 w-${role.width} h-32`}
                src={role.image}
                alt={role.name}
              />
              <h4 className="mx-auto pointer-events-none p-1 text-xl font-medium font-mono text-white">
                {role.name}
              </h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseRole;
