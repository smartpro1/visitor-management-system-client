import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    const {
      postsPerPage,
      totalPosts,
      paginate,
      nextPage,
      prevPage,
    } = this.props;
    const pageNumbers = [];

    // if (totalPosts <= postsPerPage) return;

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a onClick={() => prevPage()} className="page-link" href="#">
              Previous
            </a>
          </li>
          {pageNumbers.map((pageNum) => (
            <li key={pageNum} className="page-item">
              <a
                onClick={() => paginate(pageNum)}
                href="#"
                className="page-link"
              >
                {pageNum}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a onClick={() => nextPage()} className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
