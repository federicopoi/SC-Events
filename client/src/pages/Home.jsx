import React, { Component } from "react";
import CalendarView from "./CalendarView";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class Home extends Component {
  render() {
    const { isAuthenticated, isLoading } = this.props;
    if (!localStorage.token) return <Navigate to="/login" />;
    return (
      <div
        class="bg-gray-700 dark:bg-white"
        style={{ width: "100wh", height: "100vh" }}
      >
        <div className="pt-10 grid content-center">
          <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
            <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-black text-white">
              My Events
            </h1>
          </div>
          <CalendarView></CalendarView>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});
export default connect(mapStateToProps, null)(Home);
