import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isData: false,
      chartData: {
        labels: ["8-10am", "8-12pm", "12-2pm", "2-4pm", "4pm+"],
        datasets: [
          {
            label: "VMS Analytics For Today",
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(82, 102, 87, 0.6)",
            ],
          },
        ],
      },
    };
  }

  dateHoursExtractor = (datesArr) => {
    console.log(datesArr.length);
    const dateHours = [0, 0, 0, 0, 0];
    for (let i = 0; i < datesArr.length; i++) {
      let timeIn = new Date(datesArr[i].timeIn);
      timeIn = timeIn.getHours();
      if (timeIn > 7 && timeIn < 10) {
        dateHours[0] = ++dateHours[0];
      } else if (timeIn > 9 && timeIn < 12) {
        dateHours[1] = ++dateHours[1];
      } else if (timeIn > 11 && timeIn < 14) {
        dateHours[2] = ++dateHours[2];
      } else if (timeIn > 13 && timeIn < 16) {
        dateHours[3] = ++dateHours[3];
      } else if (timeIn > 16) {
        dateHours[4] = ++dateHours[4];
      }
    }

    return dateHours;
  };

  componentDidMount = async () => {
    const res = await axios.get(`/api/v1/visitors/todays-logs`);
    console.log(res);
    console.log(res.data);
    if (res.data == "No result found") return;
    const resData = res.data;
    const newChartData = this.state.chartData;
    if (resData.length > 0) {
      const dateArr = this.dateHoursExtractor(resData);
      newChartData.datasets[0].data = dateArr;
      this.setState({
        chartData: newChartData,
        isData: true,
      });
    }
  };

  render() {
    const { isData } = this.state;
    if (!isData) {
      return (
        <div className="Jumbotron  text-center">
          <p className="alert alert-info">
            {" "}
            You have no logged visitor today so chart cannot be drawn
          </p>
        </div>
      );
    }
    return (
      <div className="chart">
        <Bar data={this.state.chartData} />
      </div>
    );
  }
}

export default Chart;
