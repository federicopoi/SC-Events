import React, { Component } from "react";
import Heading from "../components/Heading";
export class EventDetail extends Component {
  render() {
    const people = [
      {
        name: "Alexis Alonzo",
        role: "Organizer",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Federico Poi",
        role: "Student",
      },
      {
        name: "Benjamin Erdman",
        role: "Student",
      },

      // More people...
    ];
    return (
      <div class="bg-black dark:bg-white">
        <div className="pt-10">
          <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
            <Heading
              title="Ping Pong Tournament"
              date="Febrary 21, 2023"
              time="13:00 - 16:00"
              location="Wally"
            ></Heading>
            {/* <div className="mt-10 flex items-center text-lg text-black-500">
              Details:
            </div>
            <div className="mt-5 flex items-center text-lg text-black-500">
              Bring your own raquets and be ready to play!
            </div> */}
            <div className="bg-white py-10 sm:py-10 ">
              <div className="mx-auto grid max-w-7xl md:grid-cols-2 space-y-12 md:space-y-0">
                <div class="col-span-1">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6">
                    People
                  </h2>
                  <ul role="list" className="grid gap-x-8 gap-y-6">
                    {people.map((person) => (
                      <li key={person.name}>
                        <div className="flex items-center gap-x-6">
                          {person.imageUrl ? (
                            <img
                              className="h-16 w-16 rounded-full"
                              src={person.imageUrl}
                              alt=""
                            />
                          ) : (
                            <div class="relative inline-flex items-center justify-center h-16 w-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ">
                              <span class="font-medium text-gray-600 dark:text-gray-300 ">
                                {person.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div>
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                              {person.name}
                            </h3>
                            <p className="text-sm font-semibold leading-6 text-indigo-600">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Details
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit
                    odio vitae elementum enim vitae ullamcorper suspendisse.
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

export default EventDetail;
