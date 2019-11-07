import React from "react";
import Chart from "chart.js";
import UserData from "../components/UserData";
import { createDataSet, createOptions } from "../utils/dataset";
import trajectories from "../data/trajectoires";

class Graph extends React.Component {
  DATA_STRUCTURE = {
    label: "",
    xAxisID: "X",
    fill: false,
    lineTension: 0.1,
    backgroundColor: "",
    borderColor: "",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "",
    pointHoverBorderColor: "",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: []
  };

  constructor(props) {
    super(props);
    this.state = {
      reorderTrajectories: []
    };
  }

  componentDidMount() {
    this.reOrderByTime().then(reorderTrajectories => {
      this.setState(state => ({
        ...state,
        reorderTrajectories
      }));

      return this.initChart();
    });
  }

  render() {
    const { reorderTrajectories } = this.state;

    console.log("reorderTrajectories", reorderTrajectories);
    return (
      <div>
        <div style={{flexDirection: 'column'}}>
          <canvas id="myChart" style={{with: 100 + '%'}} />

          {reorderTrajectories.data && reorderTrajectories.data.datasets.map(dataset => (
            <UserData id={dataset.label} data={dataset.data} dataTime={dataset.dataTime} ></UserData>
          ))}
        </div>
        
      </div>
    );
  }

  reOrderByTime = () => {
    return new Promise((res, rej) => {
      let orderedTrajectories = trajectories.map(user => {
        user.points.sort((stop1, stop2) => stop1.time - stop2.time);

        return createDataSet(user);
      });

      res({
        type: "scatter",
        data: { datasets: orderedTrajectories },
        options: createOptions()
      });
    });
  };

  initChart = () => {
    const { reorderTrajectories } = this.state;

    const ctx = document.getElementById("myChart");

    return new Chart(ctx, reorderTrajectories);
  };
}

export default Graph;
