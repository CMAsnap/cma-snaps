import React from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  ResponsiveContainer,
  Legend,
  Area,
} from "recharts";

import { ACTIVE_COLOR, CLOSED_COLOR, EXPIRED_COLOR, UNDER_CONTRACT_COLOR, WITHDRAW_COLOR } from "../../utils/colors";

const data = [
  { underContract: 1200, trendLine: 200, lowerArea: 150, upperArea: 250, closed: null, expired: 220, active: 220, price: 600 },
  { underContract: 1700, trendLine: 300, lowerArea: 250, upperArea: 350, closed: 487.5, expired: 280, active: 487.5, price: 500 },
  { underContract: 2200, trendLine: 400, lowerArea: 350, upperArea: 450, closed: 370, expired: 380, active: 375, price: 400 },
  { underContract: 2700, trendLine: 500, lowerArea: 450, upperArea: 550, closed: 400, expired: 470, active: 490, price: 150 },
  { underContract: 3200, trendLine: 600, lowerArea: 550, upperArea: 650, closed: 400, expired: 590, active: 150, price: 200 },
];

const PlotPriceChart = () => {
  return (
    <ResponsiveContainer
      width={window.innerWidth - 50}
      height={window.innerHeight - 50}
    >
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis
          unit="ft2"
          type="number"
          domain={[1200, 3200]}
          dataKey="underContract"
          ticks={[1200, 1700, 2200, 2700, 3200]}
          label={{
            value: "House square footage",
            position: "bottom"
          }}
        />

        <YAxis
          tickFormatter={(tick) => {
            return `$${tick}`;
          }}
          domain={[150, 600]}
          ticks={[0, 150, 262.5, 375, 487.5, 600]}
          dataKey="price"
          unit="K"
          yAxisId="left"
          label={{
            value: "Housing Price",
            angle: -90,
            dx: -14,
            position: "insideLeft",
          }}
          orientation="left"
        />

        <YAxis
          tick={false}
          label={{
            value: "Best Comps",
            angle: 90,
            dx: -14,
            dy: -270
          }}
          yAxisId="right"
          orientation="right"
          axisLine={false}
        />

        <Legend verticalAlign="top" height={50} />

        <Tooltip
          formatter={(value, name) => {
            if (name !== 'lowerArea' && name !== 'upperArea' && name !== 'trendLine') {
              return [value, name];
            } else {
              return [];
            }
          }}
        />

        <Area
          type="monotone"
          dataKey="upperArea"
          stackId="1"
          stroke="none"
          fill={UNDER_CONTRACT_COLOR}
          legendType="none"
          yAxisId="left"
        />

        <Area
          type="monotone"
          dataKey="lowerArea"
          stackId="2"
          stroke="none"
          fill="white"
          legendType="none"
          fillOpacity="none"
          yAxisId="right"
        />

        <Line
          dataKey="trendLine"
          stroke={ACTIVE_COLOR}
          strokeWidth="2"
          activeDot={false}
          legendType="none"
          yAxisId="left"
        />

        <Scatter name="Closed" dataKey="closed" fill={CLOSED_COLOR} yAxisId="left" />
        <Scatter name="Expired" dataKey="expired" fill={EXPIRED_COLOR} yAxisId="left" />
        <Scatter name="Withdrawn" dataKey="withdrawn" fill={WITHDRAW_COLOR} yAxisId="left" />
        <Scatter name="Active" dataKey="active" fill={ACTIVE_COLOR} yAxisId="left" />
        <Scatter name="Under Contract" dataKey="underContract" fill={UNDER_CONTRACT_COLOR} yAxisId="left" />

      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default PlotPriceChart;
