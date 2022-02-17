import React from "react";
import { Col, Row } from "antd";

import {
  HousingSupplyChart,
  SeasonalDemandChart,
  PlotPriceChart,
  DOMChart
} from "../../components";
import {
  HousingDataOne,
  HousingDataTwo,
  HousingDataThree,
} from "../../data/HousingData";

import "./style.css";

export const Home = () => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Row gutter={[20, 20]} justify="center" align="middle">
        <Col sm={24} lg={8}>
          <HousingSupplyChart
            durationHeading="12-24 Months Ago"
            data={HousingDataOne}
            footerData="Total number: 16 listings"
          />
        </Col>
        <Col sm={24} lg={8} >
          <HousingSupplyChart
            durationHeading="6-12 Months Ago"
            data={HousingDataTwo}
            footerData="Total number: 5 listings"
          />
        </Col>
        <Col sm={24}  lg={8}>
          <HousingSupplyChart
            durationHeading="0-6 Months Ago"
            data={HousingDataThree}
            footerData="Total number: 15 listings"
          />
        </Col>
        <div className="mt-8">
          <PlotPriceChart />
        </div>

        <div className="mt-8">
          <DOMChart />
        </div>
        
        <div className="mt-8">
          <Col md={24}>
            <SeasonalDemandChart />
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default Home;
