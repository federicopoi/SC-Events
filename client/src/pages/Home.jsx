import { useState } from "react";
import CalendarView from "./CalendarView";
const Home = () => {
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
};

export default Home;
