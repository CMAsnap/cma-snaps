import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

import { COLORS_ARRAY } from "../../data/HousingData";
import { CLOSED_COLOR } from "../../utils/colors";

import "./style.css";

const HousingSupplyChart = ({ data, footerData, durationHeading }) => {

  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;

    return (
      <g>
        <text
          className="chart-center-text-percent-title"
          x={cx}
          y={cy}
          dx={26}
          dy={-18}
          fill={CLOSED_COLOR}
        >
          %
        </text>
        <text
          className="chart-center-text-percent"
          x={cx}
          y={cy}
          dy={-10}
          textAnchor="middle"
          fill={CLOSED_COLOR}
        >
          {payload.payload.value}
        </text>
        <text
          className="chart-center-text"
          x={cx}
          y={cy}
          dy={15}
          textAnchor="middle"
          fill={CLOSED_COLOR}
        >
          of listing were
        </text>
        <text
          className="chart-center-closed"
          x={cx}
          y={cy}
          dy={40}
          textAnchor="middle"
          fill={CLOSED_COLOR}
        >
          CLOSED
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <div className="housing-chart-card">
      <div className="housing-chart-card-heading">
        {durationHeading}
      </div>
      <PieChart width={400} height={400}>
        <Pie
          activeShape={renderActiveShape}
          data={data}
          cx={200}
          cy={200}
          innerRadius={80}
          outerRadius={95}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS_ARRAY[index % COLORS_ARRAY.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="housing-chart-card-bottom">
        <div className="housing-chart-card-bottom-list">
          <div className="housing-chart-card-bottom-dot close-dot"></div>
          <div className="housing-chart-card-bottom-list-title">Closed</div>
          <div>(15/16)</div>
        </div>
        <div className="housing-chart-card-bottom-list">
          <div className="housing-chart-card-bottom-dot withdraw-dot"></div>
          <div className="housing-chart-card-bottom-list-title">Withdrawn</div>
          <div>(1/16)</div>
        </div>

        <div className="housing-chart-card-bottom-list">
          <div className="housing-chart-card-bottom-dot control-dot"></div>
          <div className="housing-chart-card-bottom-list-title">
            Under Contract
          </div>
          <div>(1/15)</div>
        </div>
      </div>
      <div className="housing-chart-footer">{footerData}</div>
    </div>
  );
};

export default HousingSupplyChart;
