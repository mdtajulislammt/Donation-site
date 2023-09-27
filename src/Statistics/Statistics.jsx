import { useLoaderData } from "react-router-dom";
import Chart from "react-google-charts";
// import { useState } from "react";

const Statistics = () => {
  const dataItems = useLoaderData();
  const dataItem = dataItems.length;

  const donationItem = JSON.parse(localStorage.getItem("donation")) || [];
//  const donationCountItem = donationItem.length  ;


   
const donationCountItem = donationItem.length  ;
 
  


  const setDataItem = dataItem - donationCountItem;

  const data = [
    ["Category", "Donation"],
    ["Total Donation", setDataItem],
    ["Your Donation",donationCountItem],
  ];
  



  const options = {
    colors: ["#FF444A", "#00C49F"],
    legend: {
      position: "bottom",
    },
    chartArea: {
      width: "100%",
      height: "60%",
    },
    fontSize: 18,

    pieSliceTextStyle: {
      color: "white",
      
    },
    legendTextStyle: {
      fontSize: 20, 
      
        
    },
    
  };

  return (
    <div className="flex items-center justify-center  md:h-[70vh] lg:h-[60vh]  ">
      <div className="w-full max-w-md">
      <Chart
      chartType="PieChart"
      data={data} 
      options={options}
      width={"100%"}
      height={"500px"}
    />
      </div>
    </div>
  );
};

export default Statistics;
