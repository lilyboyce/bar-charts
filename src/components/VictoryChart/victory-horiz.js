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

const styles ={

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

const VictoryHoriz = () => {
    return(
        <VictoryChart height={600}>
            <VictoryBar
            horizontal
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
            />
            {/* <VictoryScatter
          data={data}
          y={"brand"}
          x={"goal"}
          size={2}
          style={{ data: { fill: "#FFA600" } }}
        /> */}
        </VictoryChart>
    )
};

export default withStyles(styles)(VictoryHoriz);