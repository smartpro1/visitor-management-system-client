import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "../Layout/Sidebar";
import { formatDate } from "./DateFormatter";
import { fetchVisitorsLog } from "../../actions/adminActions";
import Pagination from "./Pagination";
import VisitorLogsDetails from "./VisitorLogsDetails";

class MyVisitorsLogs extends Component {
  state = {
    posts: [],
    currentPage: 1,
    postsPerPage: 5,
    loading: false,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const { fetchVisitorsLog } = this.props;
    await fetchVisitorsLog();
    const { visitorsLogs } = this.props;
    this.setState({
      posts: visitorsLogs,
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
          <div className="col-md-2 d-none d-sm-block d-xs-block sidebar">
            <Sidebar />
          </div>
          <div
            className="container alert alert-info text-center mt-5 col-md-4 info-cont alert-dismissible fade show"
            role="alert"
          >
            You have no logged visitor yet.
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
        <div className="col-md-8 mx-auto mt-3">
          <h2 className="my-3 text-center">Visitors' Log</h2>
          <VisitorLogsDetails posts={currentPosts} loading={loading} />
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

MyVisitorsLogs.propTypes = {
  visitorsLogs: PropTypes.array.isRequired,
  fetchVisitorsLog: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  visitorsLogs: state.logs.visitorsLogs,
});
export default connect(mapStateToProps, { fetchVisitorsLog })(MyVisitorsLogs);
