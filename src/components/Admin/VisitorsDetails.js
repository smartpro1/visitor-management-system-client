import React, { Component } from "react";
import { formatDate } from "./DateFormatter";

class VisitorsDetails extends Component {
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
              <th>fullname</th>
              <th>address</th>
              <th>sex</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((visitor) => (
              <tr key={visitor.id}>
                <td>{visitor.id}</td>
                <td>{visitor.fullname}</td>
                <td>{visitor.address}</td>
                <td>{visitor.sex}</td>
                <td>{formatDate(visitor.created_At)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VisitorsDetails;
