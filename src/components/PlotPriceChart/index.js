import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { data01, data02 } from "../../data/PlotPriceData";
import {CLOSED_COLOR} from "../../utils/colors"
import "./style.css";

const PlotPriceChart = () => {
  return (
    <ScatterChart
      width={window.innerWidth - 100}
      height={window.innerHeight}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="stature" unit="cm" />
      <YAxis
        yAxisId="left"
        type="number"
        dataKey="y"
        name="weight"
        unit="kg"
        stroke={CLOSED_COLOR}
      />
      <YAxis
        yAxisId="right"
        type="number"
        dataKey="y"
        name="weight"
        unit="kg"
        orientation="right"
        stroke="#82ca9d"
      />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter yAxisId="left" name="A school" data={data01} fill={CLOSED_COLOR} />
      <Scatter yAxisId="right" name="A school" data={data02} fill={CLOSED_COLOR} />
    </ScatterChart>
  );
};

export default PlotPriceChart;
