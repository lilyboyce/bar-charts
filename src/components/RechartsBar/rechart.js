import React from "react";
import {
  ComposedChart,
  //   ReferenceDot,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  //   Legend,
  ResponsiveContainer
} from "recharts";
import withStyles from "react-jss";

const styles = {
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
    goal: 59090408,
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
    goal: 55918960,
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

const CustomTooltip = ({ active, brand, timeSpent, goal }) => {
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

const CustomizedAxisTick = ({x, y, stroke, payload}) => {
  return(
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
}

console.log(CustomizedAxisTick);

const RechartsBar = () => {
  return (
    <ResponsiveContainer height={400}>
      <ComposedChart
        // width={800}
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
          tick={<CustomizedAxisTick/>}
          tickLine={false}
          fontFamily="Rubik"
          fill="#c4c4c4"
          fontSize="10px"
          // interval={0}
          tick={{ angle: 45 }}
          padding={{ left: 30, right: 30 }}
        />
        <YAxis fontFamily="Rubik" fontSize="10px" />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Bar
          dataKey="timeSpent"
          barCategoryGap="5%"
          barSize={30}
          fill="tomato"
          legend="none"
        >
          {
          	data.map((datum) => {
            	const color = datum.goal > datum.timeSpent ? '#FF6361' : '#00205C';
            	return <Cell fill={color} />;
            })
          }
        </Bar>
        <Line dataKey="goal" stroke="none" dot={{fill: '#FFA600', r:6}} activeDot={{stroke:'#FFA600', r:8}} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default withStyles(styles)(RechartsBar);
