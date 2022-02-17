import "./style.css";
import React from "react";
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import {
  CLOSED_COLOR,
  CONRTOLED_COLOR,
  WITHDRAW_COLOR,
} from "../../utils/colors";

const data = [
  {
    name: "Page A",
    uv: null,
    pv: null,
    amt: null,
    cnt: null,
    yAxis: null,
  },
  {
    name: "Page B",
    uv: 200,
    pv: 487.5,
    amt: 600,
    cnt: 487.5,
    yAxis: 487.5,
  },
  {
    name: "Page C",
    uv: 300,
    pv: 250,
    amt: 600,
    cnt: 350,
    yAxis: 300,
  },
  {
    name: "Page D",
    uv: 200,
    pv: 320,
    amt: 600,
    cnt: 490,
    yAxis: 262.5,
  },
  {
    name: "Page E",
    uv: 150,
    pv: 490,
    amt: 600,
    cnt: 170,
    yAxis: 200,
  },
  {
    name: "Page F",
    uv: 170,
    pv: 270,
    amt: 600,
    cnt: 370,
    yAxis: 150,
  },
  {
    name: "Page F",
    uv: 400,
    pv: 430,
    amt: 480,
    cnt: 400,
    yAxis: 150,
  },
  {
    name: "Page F",
    uv: 200,
    pv: 270,
    amt: 600,
    cnt: 400,
    yAxis: 150,
  },
  {
    name: "Page F",
    uv: 300,
    pv: 370,
    amt: 600,
    cnt: 400,
    yAxis: 150,
  },
  {
    name: "Page F",
    uv: 450,
    pv: 480,
    amt: 600,
    cnt: 270,
    yAxis: 150,
  },
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
          {/* <CartesianGrid /> */}
          <XAxis ticks={[1200, 1700, 2200, 3200]} />
          <YAxis
            domain={[150, 600]}
            tickCount={6}
            tickFormatter={(tick) => {
              return `$ ${tick}`;
            }}
            allowDecimals={true}
            unit="K"
            label={{
              value: "Housing Price",
              angle: -90,
              dx: -15,
              position: "insideLeft",
            }}
          />

          <Area type="stepBefore" dataKey="amt" fill="#FFF8EF" stroke="white" />
          <Scatter dataKey="cnt" fill={CLOSED_COLOR} />
          <Scatter dataKey="uv" fill={CONRTOLED_COLOR} />
          <Scatter dataKey="pv" fill={WITHDRAW_COLOR} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
