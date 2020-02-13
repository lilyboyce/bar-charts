import React from "react";
// import PropTypes from 'prop-types';
import withStyles from "react-jss";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryScatter,
  VictoryTooltip
} from "victory";

const styles = {
  customTooltip: {
    fontFamily: "Rubik",
    color: "black"
  }
};

const data = [
  {
    brand: "The New Yorker",
    goal: 180071014,
    timeSpent: 208366158
  },
  {
    brand: "Wired",
    goal: 94568726,
    // timeSpent: 122029256
    timeSpent: 44568726
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

const CustomTooltip = (datum, x, y) => {
  return (
    <g style={{ pointerEvents: "none" }}>
      <foreignObject x={datum.x} y={datum.y} width={"10%"} height="100">
        <div
          style={{
            fontSize: "6px",
            textAlign: "left",
            fontFamily: "Rubik",
            fill: "black",
            border: "1px solid black"
          }}
        >
          <div style={{ color: "black" }}>{datum.brand}</div>
          <div style={{ color: "black" }}>timespent: {datum.timeSpent}</div>
          <div style={{ color: "black" }}>goal: {datum.goal}</div>
        </div>
      </foreignObject>
    </g>
  );
};

console.log(CustomTooltip);

// const CustomFlyout = () => {
//   return(
//     <g>

//     </g>
//   )
// }

const Victory = () => {
  return (
    <VictoryChart domainPadding={{ x: 20, y: 10 }}>
      <VictoryAxis
        crossAxis
        style={{
          tickLabels: {
            fontSize: 6,
            angle: 45,
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

      <VictoryBar
        data={data}
        style={{
          data: {
            fill: ({ datum }) =>
              datum.timeSpent < datum.goal ? "#FF6361" : "#00205C"
          },
          labels: { fontSize: 10 }
        }}
        x={"brand"}
        y={"timeSpent"}
        cornerRadius={2}
        labels={() => ""}
        labelComponent={
          <VictoryTooltip
            // horizontal={true}
            // constrainToVisibleArea={true}
            // style={{
            //   fontSize: 8,
            //   fontFamily: "Rubik"
            // }}
            // flyoutStyle={{
            //   fill: "white",
            //   boxShadow: "0, 0, 15px, rgba(0,0,0,.2)",
            //   strokeWidth: "0.5px"
            // }}
            flyoutComponent={<CustomTooltip data={data}/>}
          />
        }
      />
      <VictoryScatter
        data={data}
        x={"brand"}
        y={"goal"}
        style={{ data: { fill: "#FFA600" } }}
      />
    </VictoryChart>
  );
};

export default withStyles(styles)(Victory);
