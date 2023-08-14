import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 pt-32 pb-8 dark:border-gray-800">
      <div>
        <div className="m-auto space-y-8 px-4 text-gray-600 dark:text-gray-400 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 md:col-span-2 lg:col-span-3">
              <div className="flex h-full items-center justify-between gap-6 border-b border-white py-6 dark:border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                <div>
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
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m1013.8 349.8l6.1-34.2h107.8q28.4 0 31.5-17 2.9-17-25.5-17h-107.8l6-34.1h113.5q56.8 0 47.8 51.1-9.1 51.2-65.8 51.2h-10.5l67.8 68h-52.3l-67.9-68z"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m987.8 304.3l-10 56.8q-10 56.6-66.8 56.7l-56.7 0.2v-0.2q-56.8 0-46.8-56.7l10-56.8q10-56.8 66.8-56.8h56.8q56.7 0 46.7 56.8zm-145.2 51.1q-5.1 28.4 23.3 28.4h45.5q28.4 0 33.3-28.4l8-45.4q5.1-28.4-23.3-28.4h-51.1q-22.7 0-27.7 28.4z"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m617.3 281.6l5.9-34.1h170.3l-6 34.1h-68.2l-24 136.4h-34.1l24.1-136.4z"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m565.1 383.8l-6 34.2h-113.5q-56.8 0-46.8-56.9l10-56.8q10.1-56.8 66.8-56.8h113.6l-6 34.1h-109q-27.3 0-32.1 27.3l-8.4 47.6q-4.8 27.3 22.6 27.3z"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m214.5 247.5h170.3l-6 34.1h-170.3z"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m372.8 315.7l-6 34.1h-170.3l6-34.1z"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m184.5 418l6-34.1h170.3l-6 34.1z"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m89.6 418h-37l-43.9-170.5h37.1l32.8 127.6 77.9-127.6h36.9z"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m983.2 112.3l15.5-35.7h-113.6l-58 57.6-13.9 78.9h-34.1l13.9-78.9-61-91.6h45l38.9 58.6 58.7-58.6c43.7 0 78.5 0 124.1 0l-15.5-35.7 93 52.6z"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m673.7 213.1l-33-127.5-77.7 127.5h-37.2l104-170.5h37.2l43.7 170.5z"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" className="fill-[#24221B] dark:fill-white" d="m477.9 42.6c37.9 0 53.8 17.2 47.8 51.3q-9.1 51.2-65.9 51.2h-10.4l67.8 68h-52.3l-67.9-68h-50.7l6-34.2h107.9q28.4 0 31.4-17c2-11.4-7.1-17.2-26.1-17.2-62.9 0-115.5 0-176.8 0l15.6 35.6-93.1-52.6 93.1-52.8-15.6 35.7z"/>
                      </g>
                      <defs>
                          <clipPath id="clip0_4_24">
                          <rect width="1206" height="448" fill="white" />
                          </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                <div>
                  <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                    Our Expertise
                  </h2>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <Link
                        href="/solutions/semiconductor-solutions"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                        Semiconductor Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/synthetic-data"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                        Synthetic Data
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/ai"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                        Artificial Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/ar-vr"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                        AR/VR
                      </Link>
                    </li>

                  </ul>
                </div>
                <div>
                  <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                    About Us
                  </h2>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <Link
                        href="/solutions/company"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/events"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                        Awards & Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between text-sm md:pl-16">
                <span>&copy; Rayvector Technologies Pvt Limited 2022 - Present</span>
                <span>All rights reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
