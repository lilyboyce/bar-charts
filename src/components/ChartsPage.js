import React from 'react';

import NivoChart from './NivoChart/chart';
import RechartsBar from './RechartsBar/rechart';
import withStyles from "react-jss";

const styles = {
  chartContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    margin: "30px",
    padding: "20px",
    width: "80%",
  },
  chartTitle: {
    color: "black"
  }
};

const ChartsPage = ({classes}) => {
  return(
    <>
    <div className={classes.chartContainer}>
      <text className={classes.chartTitle}>Nivo</text>
           <NivoChart />
           </div>
            <div className={classes.chartContainer}>
            <text className={classes.chartTitle}>Recharts</text>
            <RechartsBar/>

       </div>
       </>
  );
}
export default withStyles(styles)(ChartsPage);