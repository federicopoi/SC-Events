import React, { Component } from "react";
import CalendarView from "./CalendarView";
import Toggle from "../components/Toggle";
export class Home extends Component {
  render() {
    return (
      <div class="bg-black dark:bg-white">
        <div className="pt-16">
          <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
            <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl text-black">
              My Events
            </h1>
          </div>
        </div>
        <CalendarView></CalendarView>
      </div>
    );
  }
}

export default Home;
