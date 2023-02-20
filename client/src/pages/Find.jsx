import React, { Component } from "react";
import CategoriesCard from "../components/CategoriesCard";
export class Find extends Component {
  render() {
    return (
      <div className="pt-16">
        <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
          <dic className="grid grid-cols-2 gap-4">
            <CategoriesCard
              title="Music"
              img="https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg"
            ></CategoriesCard>
            <CategoriesCard
              title="Arts"
              img="https://images.theconversation.com/files/339504/original/file-20200603-130907-asv1yo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            ></CategoriesCard>
            <CategoriesCard
              title="Sports"
              img="https://media.istockphoto.com/id/949190756/photo/various-sport-equipments-on-grass.jpg?s=612x612&w=0&k=20&c=s0Lz_k0Vq_9P6JBETBMtLsK0lSKEHg4Tnqz9KlRCSHA="
            ></CategoriesCard>
            <CategoriesCard
              title="Cooking"
              img="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg"
            ></CategoriesCard>
          </dic>
        </div>
      </div>
    );
  }
}

export default Find;
