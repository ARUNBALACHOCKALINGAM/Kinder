import React, { useState } from "react";
import { Gi3DGlasses, GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { BiDonateHeart } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { BsClipboardCheck } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import "./history.css";

function History(props) {
  const [click, setclick] = useState("hide");

  const showbutton = () => setclick("active");

  //    const [sortedField, setSortedField] = React.useState(null);
  //    const [sortConfig, setSortConfig] = React.useState(null);
  //    const {products}= props;
  //    React.useMemo(() => {
  //    let sortedProducts = [...products];
  //   if (sortedField !== null) {
  //     sortedProducts.sort((a, b) => {
  //       if (a[sortedField] < b[sortedField]) {
  //         return -1;
  //       }
  //       if (a[sortedField] > b[sortedField]) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //    }
  //    return sortedProducts;
  // }, [products, sortConfig]);

  //    const requestSort = key => {
  //       let direction = 'ascending';
  //       if (sortConfig.key === key && sortConfig.direction === 'ascending') {
  //         direction = 'descending';
  //       }
  //       setSortConfig({ key, direction });
  //     }

  return (
    <>
      <section className="p-20 lg:pt-[20px]  pb-0 mb-0 font-mono mobile:w-full">
        <div className="container mobile:w-full">
          <div className="flex flex-wrap -mx-4 mb-0 pb-0 mobile:w-full">
            <div className="w-full px-2 pb-0 mobile:w-full">
              <div className="max-w-full overflow-x-auto mb-0 pb-0 mobile:w-full">
                <table className="table-auto pl-5 mb-0 w-full pb-0 mobile:w-full">
                  <thead className="mb-0 pb-0">
                    <tr className="bg-purple text-center mb-0 pb-0">
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                      >
                        {/* <button type="button" onClick={() => requestSort('date')}> */}
                        Date
                        {/* </button> */}
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                      >
                        Donation Name
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                      >
                        Donation Description
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           
                           "
                      >
                        Confirm Status
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                      >
                        Payment Status
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                      >
                        Amount
                      </th>
                      <th
                        className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                      >
                        View Status
                      </th>
                    </tr>
                  </thead>
                  {props.data.map((data) => {
                    return (
                      <tbody>
                        <tr>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
                          >
                            {data.Date}
                          </td>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                          >
                            {data.Title}
                          </td>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                          >
                            {data.Description}
                          </td>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                          
                           "
                          >
                            {data.Confirm_stat}
                          </td>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                          >
                            {data.Payment}
                          </td>
                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                          >
                            &#8377; {data.Donation}
                          </td>

                          <td
                            className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                          >
                            <button
                              onClick={showbutton}
                              className="
                              border border-primary
                              py-2
                              px-6
                              text-primary
                              inline-block
                              rounded
                              hover:bg-purple hover:text-yellow
                              "
                            >
                              <BsClipboardCheck />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <div className={click}>
                  <div className=" flex flex-row justify-between w-full h-1/2 p-10 cursor-pointer text-smitems-center ml-auto mr-auto mt-10 bg-white rounded-lg shadow-xl shadow-purple/50 mobile:w-fit-content ">
                    <div className="flex flex-col justify-between font-mono ">
                      <div className="text-3xl rounded-full bg-green text-white border-2 w-1/2 p-2 m-auto mobile:w-fit-content">
                        <GiPayMoney />
                      </div>
                      <p className="text-xl text-center mobile:text-sm">
                        {" "}
                        Donation Made{" "}
                      </p>
                    </div>
                    <br></br>

                    <div className="flex flex-col justify-between text-right font-mono">
                      <div className="text-3xl rounded-full bg-green text-white border-2 w-1/4 p-2 text-center m-auto">
                        <GiReceiveMoney />
                      </div>
                      <p className="text-xl text-center mobile:text-sm">
                        {" "}
                        Gift Recieved by CSR partners{" "}
                      </p>
                    </div>
                    <br></br>

                    <div className="flex flex-col justify-between font-mono">
                      <div className="text-3xl rounded-full bg-purple text-white border-2 w-1/3 p-2 text-center m-auto">
                        <BiDonateHeart />
                      </div>
                      <p className="text-xl text-center mobile:text-sm">
                        {" "}
                        Gift Recieved by Donees{" "}
                      </p>
                    </div>
                    <br></br>
                    <div className="flex flex-col justify-between font-mono">
                      <div className="text-3xl rounded-full bg-purple text-white border-2 w-1/2 p-2 text-center m-auto">
                        <BiPhoneCall />
                      </div>
                      <p className="text-xl text-center mobile:text-sm">
                        {" "}
                        Call Receieved{" "}
                      </p>
                    </div>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default History;
