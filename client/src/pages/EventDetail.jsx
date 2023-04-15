import React, { Component } from "react";
import Heading from "../components/Heading";
import { getEvents } from "../store/actions/eventsActions";
import { addPerson, deletePerson } from "../store/actions/eventsActions";
import { connect } from "react-redux";
import moment from "moment";
import {
  CalendarIcon,
  ClockIcon,
  CheckIcon,
  XMarkIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
export class EventDetail extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props.events;
    const url = new URL(window.location.href);
    const id = url.pathname.split("/").pop();
    const name = this.props.user && this.props.user.name;
    const studentId = this.props.user && this.props.user.email;
    const currentPerson = { _id: id, person: { name, studentId } };
    const currentEvent = events && events.filter(({ _id }) => _id === id);
    const {
      eventName,
      description,
      location,
      date,
      time,
      details,
      organizer,
      people,
    } = currentEvent[0];

    const allPeople = [
      {
        name: organizer,
        role: "Organizer",
      },
      ...people.map(({ name }) => {
        return { name, role: "Student" };
      }),

      // More allPeople...
    ];
    return (
      <div
        class="bg-gray-700 dark:bg-white"
        style={{ width: "100wh", height: "100vh" }}
      >
        <div className="pt-10">
          <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-4xl font-bold leading-7 dark:text-gray-900 text-white sm:truncate sm:text-4xl sm:tracking-tight">
                  {eventName}
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <MapPinIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {location}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <CalendarIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {moment(date).format("MMMM Do, YYYY")}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <ClockIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {time}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className="sm:ml-3">
                  <button
                    type="button"
                    onClick={() => {
                      isCurrentPersonInPeople(people, currentPerson)
                        ? this.props.deletePerson(currentPerson)
                        : this.props.addPerson(currentPerson);
                    }}
                    className={`inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isCurrentPersonInPeople(people, currentPerson)
                        ? "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500"
                    }`}
                  >
                    {isCurrentPersonInPeople(people, currentPerson) ? (
                      <XMarkIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <CheckIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}

                    {isCurrentPersonInPeople(people, currentPerson)
                      ? "Withdraw"
                      : "Participate"}
                  </button>
                </span>
              </div>
            </div>
            <div className="dark:bg-white bg-gray-700 py-10 sm:py-10">
              <div className="mx-auto grid max-w-7xl md:grid-cols-2 space-y-12 md:space-y-0">
                <div class="col-span-1">
                  <h2 className="text-2xl font-bold tracking-tight dark:text-gray-900 text-white sm:text-3xl mb-6">
                    People
                  </h2>
                  <ul role="list" className="grid gap-x-8 gap-y-6">
                    {allPeople.map((person) => (
                      <li key={person.name}>
                        <div className="flex items-center gap-x-6">
                          {person.imageUrl ? (
                            <img
                              className="h-16 w-16 rounded-full"
                              src={person.imageUrl}
                              alt=""
                            />
                          ) : (
                            <div class="relative inline-flex items-center justify-center h-16 w-16 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600 ">
                              <span class="font-medium text-gray-600 dark:text-gray-300 ">
                                {person.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight dark:text-gray-900 text-white">
                              {person.name}
                            </h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-400 dark:text-indigo-600">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold tracking-tight dark:text-gray-900 text-white sm:text-3xl">
                    Details
                  </h2>
                  <p className="mt-6 text-lg leading-8 dark:text-gray-600 text-gray-400">
                    {details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function isCurrentPersonInPeople(people, currentPerson) {
  return people.some(
    (element) =>
      JSON.stringify(element) === JSON.stringify(currentPerson.person)
  );
}
const mapStateToProps = (state) => {
  return {
    events: state.events,
    user: state.auth.user,
  };
};
export default connect(mapStateToProps, { getEvents, addPerson, deletePerson })(
  EventDetail
);
