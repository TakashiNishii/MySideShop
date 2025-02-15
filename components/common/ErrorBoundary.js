"use client";
import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error: ", error, errorInfo);
    this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <span>
            {this.state.error ? this.state.error.message : "Something went wrong."}
          </span>
        </div>
      );
    }

    return this.props.children;
  }
}
