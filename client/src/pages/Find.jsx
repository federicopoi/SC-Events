import React, { Component } from "react";
import CategoriesCard from "../components/CategoriesCard";
export class Find extends Component {
  render() {
    return (
      <div className="pt-16 dark:bg-gray-200 bg-gray-700">
        <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
          <dic className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <CategoriesCard
              title="Ping Pong Tournament"
              description="Come have fun with us"
              img="https://i.ytimg.com/vi/q2f9eDg8WHo/maxresdefault.jpg"
            ></CategoriesCard>
            <CategoriesCard
              title="Ping Pong Tournament"
              description="Come have fun with us"
              img="https://i.ytimg.com/vi/q2f9eDg8WHo/maxresdefault.jpg"
            ></CategoriesCard>
            <CategoriesCard
              title="Ping Pong Tournament"
              description="Come have fun with us"
              img="https://i.ytimg.com/vi/q2f9eDg8WHo/maxresdefault.jpg"
            ></CategoriesCard>
            <CategoriesCard
              title="Ping Pong Tournament"
              description="Come have fun with us"
              img="https://i.ytimg.com/vi/q2f9eDg8WHo/maxresdefault.jpg"
            ></CategoriesCard>
            <CategoriesCard
              title="Ping Pong Tournament"
              description="Come have fun with us"
              img="https://i.ytimg.com/vi/q2f9eDg8WHo/maxresdefault.jpg"
            ></CategoriesCard>
            <CategoriesCard
              title="Ping Pong Tournament"
              description="Come have fun with us"
              img="https://i.ytimg.com/vi/q2f9eDg8WHo/maxresdefault.jpg"
            ></CategoriesCard>
          </dic>
        </div>
      </div>
    );
  }
}

export default Find;
