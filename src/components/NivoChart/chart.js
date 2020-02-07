import React from "react";
import { ResponsiveBar } from "@nivo/bar";

import data from "../../data";
import config from "./config";

import "./chart.css";

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
        colorBy="goal"
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

// class Chart extends React.Component {

//     render() {
//         return (
//             <div class="chart">
//                 <ResponsiveBar
//                     data={data}
//                     keys={config.keys}
//                     indexBy="country"
//                     margin={config.margin}
//                     padding={0.2}
//                     colors="spectral"
//                     colorBy="id"
//                     defs={config.defs}
//                     // fill={config.fill}
//                     borderColor="inherit:darker(1.6)"
//                     axisTop={null}
//                     axisRight={null}
//                     axisBottom={config.axisBottom}
//                     axisLeft={config.axisLeft}
//                     enableLabel={false}
//                     labelSkipWidth={12}
//                     labelSkipHeight={12}
//                     labelTextColor="inherit:darker(1.6)"
//                     animate={true}
//                     motionStiffness={90}
//                     motionDamping={15}
//                     legends={config.legends}
//                     enableGridY={false}
//                     enableGridX={false}

//                     tooltip={e => {
//                         return(
//                             <div
//                             style={{
//                                 background:"white",
//                                 padding: "9px 12px",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                                 flexDirection: "column",
//                                 color: "black",
//                                 boxShadow: "0,0,15,rbga(0,0,0,.5)",
//                                 fontSize: "14px"
//                             }}
//                             >
//                             {e.id}:{` ${e.value}`}
//                             </div>
//                         )
//                     }}
//                     // tooltip={({ id, value, color, key }) => (
//                     //     <div>country:{key}
//                     //     <div style={{ color }}>
//                     //         {id}: {value}
//                     //     </div>
//                     //     </div>
//                     // )}
//                 />
//             </div>
//         )
//     }
// }

export default NivoBar;
