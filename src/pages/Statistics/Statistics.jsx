import {useEffect, useState} from "react";
import {PieChart, Pie, Cell, Tooltip, Legend} from "recharts";

const Statistics = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const JobApplied = JSON.parse(localStorage.getItem("jobApplication"));
    setJobs(JobApplied);
  }, [jobs]);

  const data = [
    {name: "Total JobApplication", value: jobs.length},
    {name: "Available Job", value: 6 - jobs.length},
  ];

  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const COLORS = ["red", "#0088FE"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white p-1 border">
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="mb-36 flex justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
