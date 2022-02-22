import React from "react";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  Scatter,
  ResponsiveContainer,
  Legend,
  Tooltip,
  ReferenceLine,
} from "recharts";

import {
  ACTIVE_COLOR,
  CLOSED_COLOR,
  EXPIRED_COLOR,
  UNDER_CONTRACT_COLOR,
  WITHDRAW_COLOR,
} from "../../utils/colors";

import "./style.css";

const data = [
  {
    closed: null,
    expired: null,
    withdrawn: null,
    active: null,
    underContract: null,
    area: null,
    day: "Mon",
  },
  {
    closed: 200,
    expired: 487.5,
    withdrawn: null,
    active: 487.5,
    underContract: 400,
    area: null,
    day: "Tue",
  },
  {
    closed: 300,
    expired: null,
    withdrawn: 600,
    active: 350,
    underContract: 300,
    area: 600,
    day: "Wed",
  },
  {
    closed: null,
    expired: 320,
    withdrawn: 600,
    active: 490,
    underContract: 262.5,
    area: 600,
    day: "Thur",
  },
  {
    closed: null,
    expired: 490,
    withdrawn: 600,
    active: null,
    underContract: 200,
    area: 600,
    day: "Fri",
  },
  {
    closed: 170,
    expired: 270,
    withdrawn: null,
    active: 370,
    underContract: 150,
    area: 600,
    day: "Sat",
  },
  {
    closed: 400,
    expired: 430,
    withdrawn: 480,
    active: 400,
    underContract: 150,
    area: 600,
    day: "Sun",
  }
];

export default function DOMChart() {
  return (
    <div>
      <ResponsiveContainer
        width={window.innerWidth - 50}
        height={window.innerHeight - 50}
      >
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis
            dataKey="day"
            label={{
              value: "Days on the market",
              position: "bottom"
            }}
          />
          <YAxis
            ticks={[0, 150, 262.5, 375, 487.5, 600]}
            tickFormatter={(tick) => {
              return `$${tick}`;
            }}
            allowDecimals
            unit="K"
            label={{
              value: "Housing Price",
              angle: -90,
              dx: -15,
              position: "insideLeft",
            }}
          />

          <Legend verticalAlign="top" height={50} />

          <Tooltip />

          <ReferenceLine x={2} stroke="#fbb040" strokeDasharray="10" />

          <Area type="stepBefore" dataKey="area" fill="#FFF8EF" stroke="white" />
          <Scatter name="Closed" dataKey="closed" fill={CLOSED_COLOR} />
          <Scatter name="Expired" dataKey="expired" fill={EXPIRED_COLOR} />
          <Scatter name="Withdrawn" dataKey="withdrawn" fill={WITHDRAW_COLOR} />
          <Scatter name="Active" dataKey="active" fill={ACTIVE_COLOR} />
          <Scatter name="Under Contract" dataKey="underContract" fill={UNDER_CONTRACT_COLOR} />

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
