import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList,
  ResponsiveContainer
} from "recharts";
import withStyles from "react-jss";

const styles = {};

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

const CustomLabel = (x, y, value) => {
  return (
    <text x={x * 2} y={y + 16}>
      {value}
    </text>
  );
};

const RechartHoriz = () => {
  return (
    <ResponsiveContainer height={500}>
      <ComposedChart
        layout={"vertical"}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 0
        }}
      >
        {/* <Legend /> */}
        <YAxis
          dataKey={"brand"}
          interval={0}
          type={"category"}
          axisLine={false}
          tickLine={false}
          width={80}
          tick={{
            fontSize: 12,
            whitespace: "nowrap"
          }}
        />
        <XAxis type={"number"} hide={true} />
        <Bar
          dataKey="timeSpent"
          barSize={15}
          legend="none"
          radius={[0, 3, 3, 0]}
        >
          {data.map(datum => {
            const color = datum.goal > datum.timeSpent ? "#EF4A4A" : "#00205C";
            return <Cell fill={color} />;
          })}
          <LabelList
            dataKey={"goal"}
            position={"right"}
            content={<CustomLabel value={data.goal}/>}
          />
        </Bar>
        <Line
          dataKey={"goal"}
          stroke="none"
          dot={{ fill: "#f2f2f2", r: 4 }}
          activeDot={{ stroke: "#FFA600", r: 6 }}
        >
          {data.map(datum => {
            const color = datum.goal > datum.timeSpent ? "#4a4a4a" : "#f2f2f2";
            return <Cell fill={color} />;
          })}
        </Line>
        {/* <Tooltip position={{x: 26, y:0}}/> */}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default withStyles(styles)(RechartHoriz);
