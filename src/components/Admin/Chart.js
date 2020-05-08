import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: ["Week1", "Week2", "Week3", "Week4"],
        datasets: [
          {
            label: "VMS Analytics",
            data: [50, 35, 40, 40],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Bar data={this.state.chartData} />
      </div>
    );
  }
}

export default Chart;
