import React from 'react';
import data from "./stacked-data";
import {VictoryStack,VictoryTooltip, VictoryChart,VictoryBar,VictoryAxis} from "victory";



const VictoryStackBar = () => {

    const dataset = data;

    return(
        // <div>
        <VictoryChart domainPadding={{ x: 20, y: 10 }}>
        <VictoryAxis
        crossAxis
        tickFormat={dataset.date}
        style={{
          tickLabels: {
            fontSize: 6,
            marginBottom: "20px",
            fontFamily: "Rubik",
            color: "#C4C4C4",
            textAnchor: "start",
            verticalAnchor: "middle"
          },
          axis: {
            stroke: "#c4c4c4"
          }
        }}
      />
      <VictoryAxis
        dependentAxis
        style={{
          tickLabels: {
            fontSize: 6,
            fontFamily: "Rubik"
          },
          axis: {
            stroke: "#fff"
          }
        }}
      />
            <VictoryStack
            categories={["Organic Search", "Social", "Direct", "Email", "Referral", "Other"]}
            >
            <VictoryBar data={dataset} x={dataset.date} y={dataset.percent}/>

            </VictoryStack>

            
        </VictoryChart>
        // </div>
    )
}

export default VictoryStackBar;