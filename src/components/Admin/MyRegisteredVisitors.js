import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "../Layout/Sidebar";
import { fetchVisitors } from "../../actions/adminActions";
import VisitorsDetails from "./VisitorsDetails";
import Pagination from "./Pagination";

class MyRegisteredVisitors extends Component {
  state = {
    posts: [],
    currentPage: 1,
    postsPerPage: 5,
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const { fetchVisitors } = this.props;
    await fetchVisitors();
    const { visitors } = this.props;
    this.setState({
      posts: visitors,
      loading: false,
    });
  };

  render() {
    const { posts, postsPerPage, currentPage, loading } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (!posts || posts.length === 0) {
      return (
        <div className="row">
          <div className="col-md-2 bg-info sidebar">
            <Sidebar />
          </div>
          <div
            className="container alert alert-info text-center mt-5 col-md-4 info-cont mt-4"
            role="alert"
          >
            You have no registered visitor yet.
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
        <div className="col-md-2 d-none d-sm-block d-xs-block sidebar">
          <Sidebar />
        </div>
        <div className="col-md-8 table-responsive mx-auto mt-3">
          <h2 className="my-3 text-center">Registered Visitors</h2>
          <VisitorsDetails posts={currentPosts} loading={loading} />
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

MyRegisteredVisitors.propTypes = {
  visitors: PropTypes.array.isRequired,
  fetchVisitors: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  visitors: state.visitors.visitors,
});

export default connect(mapStateToProps, { fetchVisitors })(
  MyRegisteredVisitors
);
