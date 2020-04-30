import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SecuredRoute = ({ component: Component, admin, ...otherProps }) => (
  <Route
    {...otherProps}
    render={(props) =>
      admin.isValidToken ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

SecuredRoute.propTypes = {
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.login,
});

export default connect(mapStateToProps)(SecuredRoute);
