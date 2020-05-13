import React, { Component } from "react";
import { formatDate } from "./DateFormatter";

export default class TrackedDetails extends Component {
  render() {
    const { posts, loading } = this.props;
    if (loading) {
      return (
        <div className="forgot-password text-center mt-4 loading">
          <p className="spinner-border text-primary  my-3"></p>
          <p className="my-2">Loading...</p>
        </div>
      );
    }
    return (
      <div>
        <table className="table table-hover ">
          <thead className="thead-light">
            <tr>
              <th>Visitor id</th>
              <th>Whom To See</th>
              <th>Tag</th>
              <th>Signed By</th>
              <th>Date-Time In</th>
              <th>Date-Time Out</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.whomToSee}</td>
                <td>{post.tag}</td>
                <td>{post.signedBy}</td>
                <td>{formatDate(post.timeIn)}</td>

                <td>{formatDate(post.timeOut || "active")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
