import React, { Component } from "react";
import { formatDate } from "./DateFormatter";

class VisitorLogsDetails extends Component {
  render() {
    const { posts, loading } = this.props;
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        <table className="table table-hover ">
          <thead className="thead-light">
            <tr>
              <th>id</th>
              <th>Whom To See</th>
              <th>Purpose</th>
              <th>Tag</th>
              <th>Date in</th>
              <th>Date out</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.whomToSee}</td>
                <td>{log.purpose}</td>
                <td>{log.tag}</td>
                <td>{formatDate(log.timeIn)}</td>
                <td>{formatDate(log.timeOut || "active")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default VisitorLogsDetails;
