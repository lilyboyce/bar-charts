import React from "react";

import NivoChart from "./NivoChart/chart";
import RechartsBar from "./RechartsBar/rechart";
import Victory from "./VictoryChart/victory";
import withStyles from "react-jss";

const styles = {
  chartContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    margin: "30px",
    padding: "20px",
    width: "80%"
  },
  chartTitle: {
    color: "black"
  },
  text: {
    fontSize: "14px",
    color: "gray",
    marginTop: "30px"
  }
};


const ChartsPage = ({ classes }) => {
  return (
    <>
      <div className={classes.chartContainer}>
        <text className={classes.chartTitle}>Nivo</text>
        <NivoChart />
        <text className={classes.text}> in order to combine charts, must draw your own line/dot whatever and add it to chart component - there is no support for multiple chart components in one svg frame </text>
      </div>
      <div className={classes.chartContainer}>
        <text className={classes.chartTitle}>Recharts</text>
        <RechartsBar />
        <text className={classes.text}>based on svg styling, very straightforward customization. easy to combine two charts. tooltips more involved to get them how you want them. </text>
      </div>
      <div className={classes.chartContainer}>
        <text className={classes.chartTitle}>Victory</text>
      <Victory />
      <text className={classes.text}>based on svg styling, very straightforward customization. easy to combine two charts (as long as they're using the same axes) </text>
      </div>
    </>
  );
};
export default withStyles(styles)(ChartsPage);
