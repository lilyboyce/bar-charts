import React from "react";

import {
  VictoryBar,
  VictoryLegend,
  VictoryChart,
  VictoryAxis,
  VictoryScatter,
  VictoryTooltip
} from "victory";

const data = [
  {
    brand: "The New Yorker",
    goal: 180071014,
    timeSpent: 208366158
  },
  {
    brand: "Wired",
    goal: 94568726,
    timeSpent: 122029256
  },
  {
    brand: "Vanity Fair",
    goal: 88277387,
    timeSpent: 116791302
  },
  {
    brand: "Teen Vogue",
    goal: 23771643,
    timeSpent: 31491036
  },
  {
    brand: "Glamour",
    goal: 42090408,
    timeSpent: 56800805
  },
  {
    brand: "Vogue",
    goal: 61136100,
    timeSpent: 83705322
  },
  {
    brand: "Allure",
    goal: 44253466,
    timeSpent: 66010598
  },
  {
    brand: "GQ",
    goal: 51855524,
    timeSpent: 78281229
  },
  {
    brand: "Architectural Digest",
    goal: 18126918,
    timeSpent: 27365902
  },
  {
    brand: "Pitchfork",
    goal: 50797245,
    timeSpent: 77289997
  },
  {
    brand: "Self",
    goal: 49500320,
    timeSpent: 76554197
  },
  {
    brand: "CN Traveler",
    goal: 25918960,
    timeSpent: 40869596
  },
  {
    brand: "Bon Appetit",
    goal: 74403536,
    timeSpent: 126443929
  },
  {
    brand: "Epicurious",
    goal: 48162400,
    timeSpent: 93621041
  }
];

const dataLabel = data.map(d => {
  var o = Object.assign({}, d);
  o.label =
    o.brand + "\n" + "Time Spent: " + o.timeSpent + "\n" + "Goal: " + o.goal;
  return o;
});

console.log(data);
console.log(dataLabel);

const Victory = () => {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis
        crossAxis
        style={{
          tickLabels: {
            fontSize: 6,
            angle: 45,
            fontFamily: "Rubik",
            color: "#C4C4C4",
            textAnchor: "start",
            verticalAnchor: "middle"
          }
        }}
      />
      <VictoryAxis
        dependentAxis
        style={{
          tickLabels: {
            fontSize: 6,
            fontFamily: "Rubik"
          }
        }}
      />

      <VictoryBar
        data={dataLabel}
        style={{
          data: { fill: "tomato" },
          labels: { fontSize: 10 }
        }}
        x={"brand"}
        y={"timeSpent"}
        cornerRadius={2}
        labelComponent={
          <VictoryTooltip
            // horizontal={true}
            constrainToVisibleArea={true}
            style={{
              fontSize: 8,
              fontFamily: "Rubik"
            }}
            flyoutStyle={{
              fill: "white",
              boxShadow: "0, 0, 15px, rgba(0,0,0,.2)",
              strokeWidth: "0.5px"
            }}
          />
        }
      />
      <VictoryScatter data={data} x={"brand"} y={"goal"} />
    </VictoryChart>
  );
};

export default Victory;
