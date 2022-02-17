import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip } from "recharts";

import { SEASON_DATA } from "../../data/SeasonalData";
import { PROGRESS_BAR_ORANGE_COLOR, GREY_COLOR } from "../../utils/colors";
import "./style.css";

const SeasonalDemandChart = () => {
  return (
    <div className="seasonal-demand-container">
      <BarChart
        width={window.innerWidth - 100}
        height={window.innerHeight - 100}
        data={SEASON_DATA}
      >
        <Bar dataKey="uv">
          {SEASON_DATA.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={entry.uv > 50 ? PROGRESS_BAR_ORANGE_COLOR : GREY_COLOR}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default SeasonalDemandChart;
