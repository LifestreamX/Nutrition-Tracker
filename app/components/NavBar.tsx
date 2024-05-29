'use client';

import {
  Fragment,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  useEffect,
  useState,
} from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import navicon from '../.././public/images/navicon.png';
import Image from 'next/image';
import Link from 'next/link';
import { useMyContext } from '@/MyContext';

import { Session as NextAuthSession } from 'next-auth';
import { useSession } from 'next-auth/react';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

interface NavProps {
  session: NextAuthSession | null;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'News', href: '/news', current: false },
];

const NavBar: React.FC<NavProps> = ({ session }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(true);
  const { profileAvatar, setProfileAvatar } = useMyContext();

  // useEffect(() => {
  //   const grabGoogleAvatar = async () => {
  //     if (status === 'authenticated' && userSession?.user?.image) {
  //       try {
  //         const res = await fetch('/api/profileAvatar', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'text/plain',
  //           },
  //           body: JSON.stringify({ profileAvatar: session?.user?.image }),
  //         });

  //         console.log(res);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     grabGoogleAvatar();
  //   };
  // }, [status]);

  let userEmail:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | null
    | undefined;

  if (session?.user) {
    userEmail = session.user?.email;
  }

  return (
    <Disclosure as='nav' className='bg-gray-800 '>
      {({ open }) => (
        <>
          <header className='mx-auto  px-2 sm:px-6 lg:px-8  relative flex h-16 items-center justify-betwee '>
            {/* left side  nav */}
            <Link href='/' legacyBehavior>
              <h1
                className='text-white text-bold text-xl absolute left-10 top-4 hidden md:block z-20
                cursor-pointer '
              >
                nutritiontracker
              </h1>
            </Link>

            {/* Mobile menu button*/}
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
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
                <div className='flex space-x-4 text-white '>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        'relative px-3 py-2 rounded-md  ',
                        item.current
                          ? 'bg-gray-900 text-white'
                          : ' hover:text-white group'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <span className='relative z-10'>{item.name}</span>
                      <span className='absolute left-0 w-full h-1 bg-white bottom-0 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform'></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* right side of nav bar */}
            <div className=' flex justify-center items-center '>
              {
                <>
                  <button
                    type='button'
                    className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  >
                    <span className='sr-only'>View notifications</span>
                  </button>

                  {session && session.user?.email ? (
                    <>
                      <Menu as='div' className='relative ml-3'>
                        <div>
                          <Menu.Button
                            data-testid='right-nav-menu-button'
                            className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                          >
                            <span className='sr-only'>Open user menu</span>

                            {profileAvatar && profileAvatar !== 'null' ? (
                              <div className='container'>
                                <Image
                                  className='w-10 h-10 rounded-full'
                                  src={profileAvatar}
                                  alt='Default avatar'
                                  data-testid='avatar'
                                  width={50}
                                  height={50}
                                  priority={true} // or priority={1}
                                />
                              </div>
                            ) : (
                              <div className='relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                                <svg
                                  className='absolute w-10 h-10 text-gray-400 -left-1'
                                  fill='currentColor'
                                  viewBox='0 0 20 20'
                                  xmlns='http://www.w3.org/2000/svg'
                                  data-testid='avatar'
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
                          <Menu.Items className='absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <div className='p-2 '>
                              <p className='dark:text-black flex flex-col '>
                                Account:{' '}
                                <span className='font-medium break-all  '>
                                  {userEmail}
                                </span>
                              </p>
                            </div>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='/dashboard'
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                  data-testid='Dashboard'
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
                                  data-testid='Settings'
                                >
                                  Settings
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='./signout'
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                  data-testid='Sign-out'
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
                                  data-testid='My-Food-Logs'
                                >
                                  My Food Logs
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </>
                  ) : (
                    <>
                      <div className='group relative'>
                        <Link href='/login'>
                          <p className='text-white font-semi-bold text-xl cursor-pointer relative'>
                            Sign In
                          </p>
                          <span className='absolute left-0 w-full h-1 bg-white transition-transform origin-left transform scale-x-0 group-hover:scale-x-100'></span>
                        </Link>
                      </div>
                    </>
                  )}
                </>
              }
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
