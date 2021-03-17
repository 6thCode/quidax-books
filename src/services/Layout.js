import React, { Component, Fragment } from "react";
import Navbar from "../partials/Navbar";

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Navbar />
        {children}
      </Fragment>
    );
  }
}
