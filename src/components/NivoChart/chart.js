import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import config from "./config";

import "./chart.css";

const data = [
    {
      "brand": "The New Yorker",
      "goal": 180071014,
      "timeSpent": 208366158
    },
    {
      "brand": "Wired",
      "goal": 94568726,
      "timeSpent": 122029256
    },
    {
      "brand": "Vanity Fair",
      "goal": 88277387,
      "timeSpent": 116791302
    },
    {
      "brand": "Teen Vogue",
      "goal": 23771643,
      "timeSpent": 31491036
    },
    {
      "brand": "Glamour",
      "goal": 42090408,
      "timeSpent": 56800805
    },
    {
      "brand": "Vogue",
      "goal": 61136100,
      "timeSpent": 83705322
    },
    {
      "brand": "Allure",
      "goal": 44253466,
      "timeSpent": 66010598
    },
    {
      "brand": "GQ",
      "goal": 51855524,
      "timeSpent": 78281229
    },
    {
      "brand": "Architectural Digest",
      "goal": 18126918,
      "timeSpent": 27365902
    },
    {
      "brand": "Pitchfork",
      "goal": 50797245,
      "timeSpent": 77289997
    },
    {
      "brand": "Self",
      "goal": 49500320,
      "timeSpent": 76554197
    },
    {
      "brand": "CN Traveler",
      "goal": 25918960,
      "timeSpent": 40869596
    },
    {
      "brand": "Bon Appetit",
      "goal": 74403536,
      "timeSpent": 126443929
    },
    {
      "brand": "Epicurious",
      "goal": 48162400,
      "timeSpent": 93621041
    }
  ];

const NivoBar = () => {
  return (
    <div class="chart">
      <ResponsiveBar
        data={data}
        keys={config.keys}
        indexBy="brand"
        margin={config.margin}
        padding={0.2}
        colors="spectral"
        // colorBy="goal"
        defs={config.defs}
        fill={config.fill}
        borderColor="inherit:darker(1.6)"
        axisTop={null}
        axisRight={null}
        axisBottom={config.axisBottom}
        axisLeft={config.axisLeft}
        // enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={config.legends}
        enableGridY={false}
        enableGridX={false}
        tooltip={e => {
          return (
            <div
              style={{
                background: "white",
                padding: "9px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "black",
                boxShadow: "0,0,15,rbga(0,0,0,.5)",
                fontSize: "14px"
              }}
            >
              {e.id}:{` ${e.value}`}
            </div>
          );
        }}
      />
    </div>
  );
};

export default NivoBar;
