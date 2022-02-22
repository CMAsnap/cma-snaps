import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, ComposedChart } from "recharts";

import { SEASON_DATA } from "../../data/SeasonalData";
import { PROGRESS_BAR_ORANGE_COLOR, GREY_COLOR } from "../../utils/colors";

import "./style.css";

const SeasonalDemandChart = () => {
  return (
    <ResponsiveContainer
      width={window.innerWidth - 50}
      height={window.innerHeight - 50}
    >
      <ComposedChart
        data={SEASON_DATA}
        barSize={60}
      >

        <Bar dataKey="uv">
          {SEASON_DATA.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              cursor="pointer"
              fill={entry.uv > 50 ? PROGRESS_BAR_ORANGE_COLOR : GREY_COLOR}
            />
          ))}
        </Bar>
        <XAxis
          dataKey="name"
          label={{
            value: "Months",
            position: "center",
            dy: 15,
          }}
        />
        <YAxis
          tickCount={9}
          type="number"
          dataKey="uv"
          label={{
            value: "Number of closings",
            position: "center",
            angle: -90,
            dx: -15,
          }}
        />

        <Area
          fill="#fef7ef"
          dataKey="highlighted"
        />

        <Tooltip cursor={false} filterNull />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default SeasonalDemandChart;
