import React from "react";
import {
  ComposedChart,
  //   ReferenceDot,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  //   Legend,
  ResponsiveContainer
} from "recharts";
import withStyles from "react-jss";

const styles =
  {
    customTooltip: {
      fill: "white",
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

const CustomTooltip = ({ active, timeSpent, brand, goal }) => {
  if (active) {
    return (
      <div className="customTooltip">
        <p className="label">{`${brand} : ${timeSpent} mins`}</p>
        <p className="intro">{`Goal: ${goal}`}</p>
      </div>
    );
  }

  return null;
};

const RechartsBar = () => {

  return (
    <ResponsiveContainer height={400}>
      <ComposedChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 50,
          left: 50,
          bottom: 5
        }}
      >
        <XAxis
          dataKey="brand"
          tickLine={false}
          fontFamily="Rubik"
          fontSize="12px"
          interval={0}
          // tick={{angle: 45}}
        />
        <YAxis fontFamily="Rubik" fontSize="10px" />
        <Tooltip content={<CustomTooltip brand={data.brand} />} />
        <Bar dataKey="timeSpent" barSize={20} fill="tomato" legend="none" />
        <Line dataKey="goal" stroke="none" fill="black" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default withStyles(styles)(RechartsBar);
