import React from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  ResponsiveContainer,
  ReferenceArea,
  Legend,
} from "recharts";

import { ACTIVE_COLOR, CLOSED_COLOR, CONRTOLED_COLOR, EXPIRED_COLOR, UNDER_CONTRACT_COLOR, WITHDRAW_COLOR } from "../../utils/colors";

const data = [
  { underContract: 1200, trendLine: 150, closed: null, expired: 300, active: 600, price: 600 },
  { underContract: 1700, trendLine: 300, closed: 487.5, expired: 600, active: 487.5, price: 500 },
  { underContract: 2200, trendLine: 400, closed: 500, expired: 300, active: 375, price: 400 },
  { underContract: 2700, trendLine: 500, closed: 400, expired: 400, active: 262.5, price: 150 },
  { underContract: 3200, trendLine: 600, closed: 400, expired: 350, active: 150, price: 200 },
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
          label={{
            value: "Housing Price",
            angle: -90,
            dx: -14,
            position: "insideLeft",
          }}
        />

        <Scatter name="Closed" dataKey="closed" fill={CLOSED_COLOR} />
        <Scatter name="Expired" dataKey="expired" fill={EXPIRED_COLOR} />
        <Scatter name="Withdrawn" dataKey="withdrawn" fill={WITHDRAW_COLOR} />
        <Scatter name="Active" dataKey="active" fill={ACTIVE_COLOR} />
        <Scatter name="Under Contract" dataKey="underContract" fill={UNDER_CONTRACT_COLOR} />

        <Legend verticalAlign="top" height={50} />

        <Tooltip />

        {/* <ReferenceLine segment={[{ x: '1400', y: 300 }, { x: '2600', y: 400 }]} strokeWidth={2} stroke={ACTIVE_COLOR} /> */}
        <ReferenceArea type="monotone" x1={1200} x2={3200} y1={262} y2={480} strokeOpacity={0.3} fill={UNDER_CONTRACT_COLOR} />

        <Line
          dataKey="trendLine"
          stroke={CONRTOLED_COLOR}
          dot={false}
          strokeWidth="3"
          activeDot={false}
          legendType="none"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default PlotPriceChart;
