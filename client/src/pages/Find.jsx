import React, { Component } from "react";
import CategoriesCard from "../components/CategoriesCard";
import { connect } from "react-redux";
import { getEvents } from "../store/actions/eventsActions";

export class Find extends Component {
  componentDidMount() {
    this.props.getEvents();
  }
  render() {
    const { events } = this.props.events;
    console.log(events);
    return (
      <div className="pt-8 dark:bg-gray-200 bg-gray-700">
        <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6 dark:bg-gray-200 bg-gray-700">
          <h1 class="mb-5 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-black text-white">
            Find Events
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {events &&
              events.map(
                ({
                  _id,
                  eventName,
                  description,
                  location,
                  date,
                  time,
                  details,
                  imageUrl,
                }) => {
                  return (
                    <div class="flex items-center">
                      <CategoriesCard
                        title={eventName}
                        description={description}
                        id={_id}
                        img={imageUrl}
                      ></CategoriesCard>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};
export default connect(mapStateToProps, { getEvents })(Find);
