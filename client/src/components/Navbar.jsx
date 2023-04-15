import React, { Component, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../media/logo.png";
import { logout } from "../store/actions/authActions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class Navbar extends Component {
  state = {
    current: "main",
  };
  render() {
    const { theme, setTheme, logout, user } = this.props;
    const name = user && user.name.split(" ");
    const initials = name && name[0].charAt(0) + name[1].charAt(0);
    return (
      <div>
        {localStorage.token && (
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center">
                        <img
                          className="block h-6 w-auto lg:hidden"
                          src={Logo}
                          alt="SC Events"
                        />
                        <img
                          className="hidden h-8 w-auto lg:block"
                          src={Logo}
                          alt="SC Events"
                        />
                      </div>
                      <div className="hidden sm:ml-6 sm:block lg:block">
                        <div className="flex space-x-4">
                          <Link
                            to="/"
                            onClick={() => {
                              this.setState({ current: "main" });
                            }}
                            className={classNames(
                              this.state.current == "main"
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={
                              this.state.current == "main" ? "page" : undefined
                            }
                          >
                            My Events
                          </Link>
                          <Link
                            to="/find"
                            onClick={() => {
                              this.setState({ current: "find" });
                            }}
                            className={classNames(
                              this.state.current == "find"
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={
                              this.state.current == "find" ? "page" : undefined
                            }
                          >
                            Find
                          </Link>
                          {user && user.role == "Event Manager" && (
                            <Link
                              to="/newEvent"
                              onClick={() => {
                                this.setState({ current: "newEvent" });
                              }}
                              className={classNames(
                                this.state.current == "newEvent"
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}
                              aria-current={
                                this.state.current == "newEvent"
                                  ? "page"
                                  : undefined
                              }
                            >
                              New Event
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                              <span class="font-medium text-gray-600 dark:text-gray-300">
                                {initials}
                              </span>
                            </div>
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="javascript:void(0)"
                                  onClick={() => {
                                    theme == `light`
                                      ? setTheme(`dark`)
                                      : setTheme(`light`);
                                  }}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {theme == "light"
                                    ? "Set Light mode"
                                    : "Set Dark mode"}
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={logout}
                                  href="/login"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    <Link to="/">
                      <Disclosure.Button
                        onClick={() => {
                          this.setState({ current: "main" });
                        }}
                        as="a"
                        className={classNames(
                          this.state.current == "main"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={
                          this.state.current == "main" ? "page" : undefined
                        }
                      >
                        My Events
                      </Disclosure.Button>
                    </Link>
                    <Link to="/find">
                      <Disclosure.Button
                        onClick={() => {
                          this.setState({ current: "find" });
                        }}
                        as="a"
                        className={classNames(
                          this.state.current == "find"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={
                          this.state.current == "find" ? "page" : undefined
                        }
                      >
                        Find
                      </Disclosure.Button>
                    </Link>
                    {user && user.role == "Event Manager" && (
                      <Link to="/newEvent">
                        <Disclosure.Button
                          onClick={() => {
                            this.setState({ current: "newEvent" });
                          }}
                          as="a"
                          className={classNames(
                            this.state.current == "newEvent"
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "block px-3 py-2 rounded-md text-base font-medium"
                          )}
                          aria-current={
                            this.state.current == "newEvent"
                              ? "page"
                              : undefined
                          }
                        >
                          New Event
                        </Disclosure.Button>
                      </Link>
                    )}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { logout })(Navbar);
