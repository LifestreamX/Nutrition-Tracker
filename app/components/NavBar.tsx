'use client';

import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import navicon from '../.././public/images/navicon.png';
import Image from 'next/image';
import Link from 'next/link';
import { useMyContext } from '@/MyContext';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

const NavBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(true);
  const { profileAvatar } = useMyContext();

  return (
    <Disclosure as='nav' className='bg-gray-800 '>
      {({ open }) => (
        <>
          <header className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
            <Link href='/' legacyBehavior>
              <h1
                className='text-white text-bold text-xl absolute left-10 top-4 hidden md:block z-20
                cursor-pointer '
              >
                nutritiontracker
              </h1>
            </Link>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button
                  data-testid='mobile-menu-button'
                  id='mobile-menu-button'
                  className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                >
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              {/* middle nav */}
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-star'>
                <div className='flex flex-shrink-0 items-center'>
                  {/* <img
                    className='block h-8 w-auto lg:hidden'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                    alt='Your Company'
                  /> */}
                  <Link href='/' legacyBehavior>
                    <>
                      <Image
                        className='block h-8 w-auto lg:hidden '
                        src={navicon}
                        alt='Nutrition Image'
                      />
                      <Image
                        className='hidden h-8 w-auto lg:block'
                        src={navicon}
                        alt='Nutrition Image'
                      />
                    </>
                  </Link>
                </div>

                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4 text-white'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        legacyBehavior
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* right side of nav bar */}
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {
                  isLoggedIn ? (
                    <>
                      <button
                        type='button'
                        className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                      >
                        <span className='sr-only'>View notifications</span>
                      </button>

                      {/* Profile dropdown */}
                      <Menu as='div' className='relative ml-3'>
                        <div>
                          <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                            <span className='sr-only'>Open user menu</span>

                            {profileAvatar ? (
                              <div className='container'>
                                <img
                                  className='w-10 h-10 rounded-full'
                                  src={profileAvatar}
                                  alt='Default avatar'
                                />
                              </div>
                            ) : (
                              <div className='relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                                <svg
                                  className='absolute w-10 h-10 text-gray-400 -left-1'
                                  fill='currentColor'
                                  viewBox='0 0 20 20'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    fillRule='evenodd'
                                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                                    clipRule='evenodd'
                                  ></path>
                                </svg>
                              </div>
                            )}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='/dashboard'
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Dashboard
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='/settings'
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Settings
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='./login'
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Sign out
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='/myfoodlogs'
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  My Food Logs
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </>
                  ) : // sign in button
                  null
                  // <Link href='/login' legacyBehavior>
                  //   <button className='mr-6 bg-transparent text-1xl hover:bg-white text-white font-semibold hover:text-gray-800 py-1 px-2 border-2 border-white hover:border-transparent rounded'>
                  //     <p className='font-bolder text-md'>LOG IN</p>
                  //   </button>
                  // </Link>
                }
              </div>
            </div>
          </header>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
