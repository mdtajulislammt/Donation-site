import { useLoaderData } from "react-router-dom";
import Chart from "react-google-charts";

const Statistics = () => {
  const dataItems = useLoaderData();
  const dataItem = dataItems.length;

  const donationItem = JSON.parse(localStorage.getItem("donation"));
  const donationCountItem = donationItem.length;

  const setDataItem = dataItem - donationCountItem;

  //  const donationPercentege = ((donationCountItem / 12) * 100).toFixed(2);
  //  const donationleft = 100 - donationPercentege;

  const data = [
    ["Category", "Donation"],
    ["Your Donation", donationCountItem],
    ["Total Donation", setDataItem],
  ];

  const options = {
    colors: ["#00C49F", "#FF444A"],
    legend: {
      position: "bottom",
    },
    series: {
      pointShape: "square",
    },
  };

  return (
    <div className="flex items-center justify-center lg:h-[60vh]  ">
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
