import { useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  EllipsisVerticalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../store/actions/eventsActions";
import { connect } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CalendarView(props) {
  useEffect(() => {
    props.getEvents();
  }, []);
  const events = props.events.events;
  const [enabled, setEnabled] = useState(false);
  let filteredEvents = events;
  if (enabled) {
    filteredEvents = events.filter((event) => {
      return event.people.some((person) => person.name == props.user.name);
    });
  }
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let selectedDayMeetings = filteredEvents.filter((event) =>
    isSameDay(parseISO(event.date), selectedDay)
  );

  return (
    <div className="pt-3 sm:pt-12">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold dark:text-gray-900 text-white">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {filteredEvents.some((event) =>
                      isSameDay(parseISO(event.date), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="sm:mt-12 mt-6 md:mt-0 md:pl-14">
            <div className="flex items-center">
              <h2 className="font-semibold dark:text-gray-900 text-gray-100 mr-4">
                Schedule for{" "}
                <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                  {format(selectedDay, "MMM dd, yyy")}
                </time>
              </h2>
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={enabled}
                  readOnly
                />
                <div
                  onClick={() => {
                    setEnabled(!enabled);
                  }}
                  className="w-11 h-6 dark:bg-gray-200 bg-gray-800 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full dark:peer-checked:after:border-white peer-checked:after:border-gray-800 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gray-800 dark:after:bg-white dark:after:border-gray-300 after:border-gray-700 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
                <span className="ml-2 text-sm font-medium text-white dark:text-gray-900">
                  {enabled ? "My events" : "All Events"}
                </span>
              </label>
            </div>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((event) => (
                  <Event event={event} key={event._id} />
                ))
              ) : (
                <p>No events for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function Event({ event }) {
  return (
    <Link to={`/event/${event._id}`}>
      <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 dark:hover:bg-gray-100 hover:bg-gray-800">
        <img
          src={event.imageUrl}
          alt=""
          className="flex-none w-10 h-10 rounded-full"
        />
        <div className="flex-auto">
          <p className="dark:text-gray-900 text-white">{event.eventName}</p>
          <p className="mt-0.5">{event.time}</p>
        </div>
        <Menu
          as="div"
          className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
        >
          <div>
            <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
              <span className="sr-only">Open options</span>
              <EllipsisVerticalIcon className="w-6 h-6" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/event/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Detail
                    </a>
                  )}
                </Menu.Item>
                {/* <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Cancel
                    </a>
                  )}
                </Menu.Item> */}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </li>
    </Link>
  );
}
const mapStateToProps = (state) => {
  return {
    events: state.events,
    user: state.auth.user,
  };
};
export default connect(mapStateToProps, { getEvents })(CalendarView);

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
