import React, { Component } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { connect } from "react-redux";
import { addEvent } from "../store/actions/eventsActions";
import { Navigate } from "react-router-dom";
export class NewEvent extends Component {
  state = {
    eventName: "",
    description: "",
    location: "",
    date: "",
    timeIn: "",
    timeOut: "",
    organizer: "",
    details: "",
    coverPicture: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const {
      eventName,
      description,
      location,
      date,
      timeIn,
      timeOut,
      organizer,
      details,
      imageUrl,
    } = this.state;
    const newEvent = {
      eventName,
      description,
      location,
      date,
      time: timeIn + " - " + timeOut,
      organizer,
      details,
      imageUrl,
    };
    this.props.addEvent(newEvent);
  };
  render() {
    if (this.props.events.addSuccess) {
      return <Navigate to={`/find`} />;
    }
    // if (this.props.user && this.props.user.role == "Student") {
    //   return <Navigate to={`/login`} />;
    // }
    return (
      <div class="bg-gray-700 dark:bg-white">
        <div className="pt-10 grid content-center">
          <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
            <form onSubmit={this.onSubmit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-black text-white">
                    Add New Event
                  </h1>
                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-white"
                        >
                          Name of Event
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="eventName"
                            id="eventName"
                            onChange={this.onChange}
                            class="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 transition-colors duration-200"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium leading-6 text-white"
                        >
                          Description
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="description"
                            id="description"
                            onChange={this.onChange}
                            class="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 transition-colors duration-200"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium leading-6 text-white"
                        >
                          Date
                        </label>
                        <div className="mt-2">
                          <input
                            type="date"
                            name="date"
                            id="date"
                            onChange={this.onChange}
                            class="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 transition-colors duration-200"
                          />
                        </div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium leading-6 text-white  mt-2"
                        >
                          Location
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="location"
                            id="location"
                            onChange={this.onChange}
                            class="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 transition-colors duration-200"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium leading-6 text-white"
                        >
                          Time
                        </label>
                        <div className="mt-2">
                          <input
                            type="time"
                            name="timeIn"
                            id="timeIn"
                            onChange={this.onChange}
                            class="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 transition-colors duration-200"
                          />
                          <input
                            type="time"
                            name="timeOut"
                            id="timeOut"
                            onChange={this.onChange}
                            class="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 transition-colors duration-200 mt-2"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium leading-6 text-white"
                        >
                          Organizer
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="organizer"
                            id="organizer"
                            onChange={this.onChange}
                            class="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 transition-colors duration-200 mt-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Details
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="details"
                          name="details"
                          rows={3}
                          onChange={this.onChange}
                          class="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 transition-colors duration-200 mt-2"
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    {/* <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-white"
                      >
                        Cover photo
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <PhotoIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <div className="mt-4 flex text-sm leading-6 text-white">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-white">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div class="mt-3"></div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Image URL
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="imageUrl"
                      id="imageUrl"
                      onChange={this.onChange}
                      class="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 transition-colors duration-200"
                    />
                  </div>
                </div>
              </div>

              <div className="my-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    user: state.auth.user,
  };
};
export default connect(mapStateToProps, {
  addEvent,
})(NewEvent);
