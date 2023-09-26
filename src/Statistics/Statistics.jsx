import { PieChart, Pie, Cell} from "recharts";
// import React, { useCallback, useState, useEffect } from "react";
import useGetData from "../Hook/useGetData";

const Statistics = () => {
     
    //  const [donationData] = useGetData();
    //  const donationItem = JSON.parse(localStorage.getItem('donation'));

    //  const combinedData = [
    //   ...donationData,
    //   ...(donationItem ? [donationItem] : []) // Include donationItem if it exists
    // ];

    const data = [
      { name: 'Group A', value: 700 },
      { name: 'Group B', value: 300 },
    ];
    
    const COLORS = ['#FF444A', '#00C49F'];
    
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

  return (
    <div className="lg:w-full md:w-[200px]">
   
       <PieChart width={1000} height={600} >
      <Pie
        data={data}
        cx={650}
        cy={220}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={180}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>


    </div>
  );
};

export default Statistics;
