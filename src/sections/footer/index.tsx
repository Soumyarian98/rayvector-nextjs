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

                <div className="flex gap-6">
                  <Link
                    href="#"
                    target="blank"
                    aria-label="github"
                    className="hover:text-primary dark:hover:text-primaryLight">
                    <span className="sr-only">Github</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    target="blank"
                    aria-label="twitter"
                    className="hover:text-primary dark:hover:text-primaryLight">
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    target="blank"
                    aria-label="medium"
                    className="hover:text-primary dark:hover:text-primaryLight">
                    <span className="sr-only">Medium</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-medium"
                      viewBox="0 0 16 16">
                      <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
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
                <span>All right reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
