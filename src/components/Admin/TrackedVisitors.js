import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "../Layout/Sidebar";
import TrackedDetails from "./TrackedDetails";
import Pagination from "./Pagination";

class TrackedVisitors extends Component {
  state = {
    posts: [],
    currentPage: 1,
    postsPerPage: 5,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const details = this.props.trackedVisitors;
    this.setState({
      posts: details.content,
    });
    this.setState({ loading: false });
  }

  render() {
    const { posts, postsPerPage, currentPage, loading } = this.state;

    if (!posts || posts.length < 1) {
      return (
        <div className="row">
          <div className="col-md-2 d-none d-sm-block d-xs-block sidebar">
            <Sidebar />
          </div>
          <div className="container col-md-8 m-auto">
            <h1 className="header-h1 my-4 text-center">Tracked Visitors</h1>
            <div className="Jumbotron  text-center">
              <p className="alert alert-info no-result-found">
                {" "}
                No result found
              </p>
            </div>
          </div>
        </div>
      );
    }

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });
    const nextPage = () => {
      if (currentPage + 1 > totalPages) return;
      this.setState({ currentPage: currentPage + 1 });
    };
    const prevPage = () => {
      if (currentPage - 1 < 1) return;
      this.setState({ currentPage: currentPage - 1 });
    };

    return (
      <div className="row">
        <div className="col-md-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-md-8 table-responsive mx-auto mt-3">
          <h2 className="my-3 text-center">Tracked Visitors</h2>
          <TrackedDetails posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </div>
    );
  }
}

TrackedVisitors.propTypes = {
  trackedVisitors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  trackedVisitors: state.trackedVisitors.trackedVisitors,
});

export default connect(mapStateToProps)(TrackedVisitors);
