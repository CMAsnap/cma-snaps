import React from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import { CLOSED_COLOR, CONRTOLED_COLOR } from "../../utils/colors";

const data = [
  { index: 1200, controllLine: 150, red: null, blue: 300, dollar: 600 },
  { index: 1700, controllLine: 300, red: 487.5, blue: 600, dollar: 487.5 },
  { index: 2200, controllLine: 400, red: 500, blue: 300, dollar: 375 },
  { index: 2700, controllLine: 500, red: 400, blue: 400, dollar: 262.5 },
  { index: 3200, controllLine: 600, red: 400, blue: 350, dollar: 150 },
];

const PlotPriceChart = () => {
  return (
    <ComposedChart
    width={window.innerWidth - 50}
    height={window.innerHeight - 50}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />

      <XAxis
        unit=" ft"
        type="number"
        domain={[1200, 3200]}
        ticks={[1200, 1700, 2200, 2700, 3200]}
        dataKey="index"
        // label={{ value: "Index", position: "insideBottomRight", }}
      />

      <YAxis
        interval={2}
        dataKey="dollar"
        tickFormatter={(tick) => {
          return `$${tick}`;
        }}
        domain={[150, 600]}
        unit="K"
        label={{
          value: "Housing Price",
          angle: -90,
          dx: -14,
          position: "insideLeft",
        }}
      />

      <Scatter name="Closed" dataKey="red" fill={CLOSED_COLOR} />
      <Scatter name="Controlled" dataKey="blue" fill={CONRTOLED_COLOR} />
      <Line
        dataKey="controllLine"
        stroke={CONRTOLED_COLOR}
        dot={false}
        strokeWidth="3"
        activeDot={false}
        legendType="none"
      />
    </ComposedChart>
  );
};

export default PlotPriceChart;
