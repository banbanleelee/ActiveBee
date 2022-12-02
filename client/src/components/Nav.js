import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CakeIcon,
  CursorArrowRaysIcon,
  PlayIcon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Auth from '../utils/auth';

const diets = [
  {
    name: 'Calories Checker',
    description: 'Get a better understanding of your daily calories intake',
    href: '/food-result',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'FDA Database',
    description: 'Get a better understanding of your daily calories intake',
    href: '/food-data',
    icon: CakeIcon,
  },
  {
    name: 'Food Logs',
    description: 'A dairy of tastes and numbers',
    href: '/food-form',
    icon: Bars3BottomRightIcon,
  },
];

const activities = [
    {
        name: 'Activity Logs',
        description: 'Get fit with every drop of sweat',
        href: '/logs',
        icon: PlayIcon,
    }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

export default function Nav() {
  return (
    <Popover className="relative bg-white z-40">
        
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Active Bee</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={require("../../src/logo.png")}
                alt="Active Bee Logo"
              />
            </a>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md p-3 bg-white text-base font-medium hover:ring-2 hover:ring-inset hover:ring-yellow-500 hover:bg-white-100 hover:text-gray-900 focus:bg-yellow-500 focus:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span>Diets</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {diets.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-yellow-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md p-3 bg-white text-base font-medium hover:ring-2 hover:ring-inset hover:ring-yellow-500 hover:bg-white-100 hover:text-gray-900 focus:bg-yellow-500 focus:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span>Activities</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {activities.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-yellow-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          {Auth.loggedIn() ? (
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link to="/dashboard" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Dashboard
            </Link>
            <Link
              href="/signup"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-yellow-500 p-3 text-base font-medium text-white shadow-sm hover:bg-gray-500"
              onClick={logout}
            >
              Log out
            </Link>
          </div>
          ):(
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link 
              to="/login" 
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Log in
            </Link>
            <Link
              to="/signup"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-yellow-500 p-3 text-base font-medium text-white shadow-sm hover:bg-gray-500"
            >
              Sign up
            </Link>
          </div>
          )}
          
        </div>
      </div>
    </Popover>
  )
}
