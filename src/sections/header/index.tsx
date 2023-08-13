import Link from "next/link";
import React from "react";

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
    link: "/studio/aboutUs",
  }
];

const Header = () => {
  return (
    <header>
      <nav
        id="navbar"
        className="fixed inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <Link
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2">
                <svg
                  className="h-7 w-auto"
                  viewBox="0 0 1206 270"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4_24)">
                  </g>
                  <defs>
                    <clipPath id="clip0_4_24">
                      <rect width="1206" height="270" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <button
                aria-label="humburger"
                id="hamburger"
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
              id="layer"
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"></div>
            <div
              id="navlinks"
              className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0 dark:lg:bg-transparent">
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
