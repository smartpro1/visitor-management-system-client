import React, { Component } from "react";
import Moment from "react-moment";
import axios from "axios";

class Test extends Component {
  state = {
    data: [],
    isLoading: false,
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await axios.get(`api/v1/students/pagination`);
    this.setState({ data: res.data.content });
    this.setState({ isLoading: false });
  }
  render() {
    const { data, isLoading } = this.state;
    const dateToFormat = "1976-04-19T12:59-0500";

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>course</th>
              <th>createdAt</th>
            </tr>
          </thead>
          <tbody>
            {data.map((result) => (
              <tr>
                <td>{result.id}</td>
                <td>{result.name}</td>
                <td>{result.course}</td>
                <td>
                  <Moment parse="YYYY-MM-DD HH:mm">{result.createdAt}</Moment>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Moment>{dateToFormat}</Moment> <br />
        <br />
        <Moment parse="YYYY-MM-DD HH:mm">1976-04-19 12:59</Moment>
      </div>
    );
  }
}

export default Test;
