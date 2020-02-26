import React from "react";

import NivoChart from "./NivoChart/chart";
import RechartsBar from "./RechartsBar/rechart";
import RechartHoriz from "./RechartsBar/rechart-horiz";
import Victory from "./VictoryChart/victory";
import VictoryStack from "./VictoryChart/victory-stack";
import VictoryHoriz from "./VictoryChart/victory-horiz";
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
      {/* <div className={classes.chartContainer}>
        <div className={classes.chartTitle}>Nivo</div>
        <NivoChart />
        <div className={classes.text}> in order to combine charts, must draw your own line/dot whatever and add it to chart component - there is no support for multiple chart components in one svg frame </div>
      </div>
      <div className={classes.chartContainer}>
        <div className={classes.chartTitle}>Recharts</div>
        <RechartsBar />
        <div className={classes.text}>based on svg styling, very straightforward customization. easy to combine two charts. tooltips more involved to get them how you want them. </div>
      </div> */}
      <div className={classes.chartContainer}>
        <div className={classes.chartTitle}>Victory</div>
      <VictoryHoriz />
      <div className={classes.text}>based on svg styling, very straightforward customization. easy to combine two charts (as long as they're using the same axes) </div>
      </div>
      <div className={classes.chartContainer}>
        <div className={classes.chartTitle}>Recharts</div>
      <RechartHoriz />
      <div className={classes.text}>tbd </div>
      </div>
    </>
  );
};
export default withStyles(styles)(ChartsPage);
