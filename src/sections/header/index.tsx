import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

const menuItems = [
  {
    id: "1",
    name: "Semiconductor Solutions",
    link: "/solutions/semiconductor-solutions",
  },
  {
    id: "2",
    name: "Synthetic Data",
    link: "/solutions/synthetic-data",
  },
  {
    id: "3",
    name: "AI",
    link: "/solutions/artificial-intelligence",
  },
  {
    id: "5",
    name: "AR/VR",
    link: "/solutions/ar-vr",
  },
  {
    id: "6",
    name: "Company",
    link: "/about",
  },
];

const Header = () => {
  const [show, setShow] = React.useState(false);
  return (
    <header>
      <nav
        id="navbar"
        className={`fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80 ${
          show ? " navbar-active" : ""
        }`}>
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <Link
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2">
                <svg
                  className="h-7 w-auto"
                  viewBox="0 0 1206 448"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4_24)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m1013.8 349.8l6.1-34.2h107.8q28.4 0 31.5-17 2.9-17-25.5-17h-107.8l6-34.1h113.5q56.8 0 47.8 51.1-9.1 51.2-65.8 51.2h-10.5l67.8 68h-52.3l-67.9-68z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m987.8 304.3l-10 56.8q-10 56.6-66.8 56.7l-56.7 0.2v-0.2q-56.8 0-46.8-56.7l10-56.8q10-56.8 66.8-56.8h56.8q56.7 0 46.7 56.8zm-145.2 51.1q-5.1 28.4 23.3 28.4h45.5q28.4 0 33.3-28.4l8-45.4q5.1-28.4-23.3-28.4h-51.1q-22.7 0-27.7 28.4z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m617.3 281.6l5.9-34.1h170.3l-6 34.1h-68.2l-24 136.4h-34.1l24.1-136.4z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m565.1 383.8l-6 34.2h-113.5q-56.8 0-46.8-56.9l10-56.8q10.1-56.8 66.8-56.8h113.6l-6 34.1h-109q-27.3 0-32.1 27.3l-8.4 47.6q-4.8 27.3 22.6 27.3z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m214.5 247.5h170.3l-6 34.1h-170.3z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m372.8 315.7l-6 34.1h-170.3l6-34.1z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m184.5 418l6-34.1h170.3l-6 34.1z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m89.6 418h-37l-43.9-170.5h37.1l32.8 127.6 77.9-127.6h36.9z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m983.2 112.3l15.5-35.7h-113.6l-58 57.6-13.9 78.9h-34.1l13.9-78.9-61-91.6h45l38.9 58.6 58.7-58.6c43.7 0 78.5 0 124.1 0l-15.5-35.7 93 52.6z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m673.7 213.1l-33-127.5-77.7 127.5h-37.2l104-170.5h37.2l43.7 170.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      className="fill-[#24221B] dark:fill-white"
                      d="m477.9 42.6c37.9 0 53.8 17.2 47.8 51.3q-9.1 51.2-65.9 51.2h-10.4l67.8 68h-52.3l-67.9-68h-50.7l6-34.2h107.9q28.4 0 31.4-17c2-11.4-7.1-17.2-26.1-17.2-62.9 0-115.5 0-176.8 0l15.6 35.6-93.1-52.6 93.1-52.8-15.6 35.7z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1206" height="448" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <button
                aria-label="humburger"
                id="hamburger"
                onClick={() => setShow(!show)}
                className="relative -mr-6 p-6 lg:hidden">
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
              </button>
            </div>
            <div
              onClick={() => setShow(p => !p)}
              className={`fixed inset-0 z-10 h-screen w-screen origin-bottom ${
                !show ? "scale-y-0" : ""
              } bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden`}></div>
            <div
              id="navlinks"
              className={`${
                !show ? "invisible" : ""
              } absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none dark:lg:bg-transparent`}>
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                  {menuItems.map(item => (
                    <li key={item.id}>
                      <Link
                        href={item.link}
                        className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                aria-label="switch theme"
                className="switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
