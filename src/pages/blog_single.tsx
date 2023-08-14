import Link from "next/link";
import React from "react";

const BlogSingle = () => {
  return (
    <body className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
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
                      <path
                        className="fill-[#24221B] dark:fill-white"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M184.589 48.5615L259.174 177.176C271.689 198.757 264.34 226.397 242.76 238.912C221.862 251.03 195.284 244.523 182.258 224.504L168.033 245.393C189.368 269.831 225.685 276.557 254.799 259.673C287.846 240.509 299.1 198.183 279.936 165.136L204.374 34.8366C201.937 30.6351 199.126 26.7859 196.008 23.3066L184.589 48.5615Z"
                      />
                      <path
                        className="fill-[#24221B] dark:fill-white"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M184.19 92.696L108.622 222.992C96.1058 244.572 68.4656 251.92 46.8855 239.405C25.3055 226.889 17.9575 199.249 30.4733 177.668L106.042 47.3721C118.558 25.792 146.198 18.444 167.778 30.9599C189.358 43.4757 196.706 71.116 184.19 92.696ZM85.2807 35.3313C104.447 2.28524 146.773 -8.96694 179.819 10.1989C212.865 29.3647 224.117 71.6908 204.951 104.737L129.383 235.033C110.217 268.079 67.8908 279.331 34.8447 260.166C1.79866 241 -9.45348 198.674 9.71234 165.628L85.2807 35.3313Z"
                      />
                      <path
                        className="fill-[#24221B] dark:fill-white"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M108.622 222.992L184.19 92.696C196.706 71.116 189.358 43.4757 167.778 30.9599C146.198 18.444 118.558 25.792 106.042 47.3721L30.4733 177.668C17.9575 199.248 25.3054 226.889 46.8855 239.405C68.4656 251.92 96.1058 244.572 108.622 222.992ZM179.819 10.1989C146.773 -8.96694 104.447 2.28524 85.2807 35.3313L9.71233 165.628C-9.4535 198.674 1.79865 241 34.8447 260.166C67.8907 279.331 110.217 268.079 129.383 235.033L204.951 104.737C224.117 71.6908 212.865 29.3647 179.819 10.1989Z"
                      />
                      <path
                        className="fill-[#24221B] dark:fill-white"
                        d="M499.74 73H526.78V203H499.61L498.57 184.15C494.757 190.823 489.6 196.197 483.1 200.27C476.6 204.343 468.93 206.38 460.09 206.38C450.557 206.38 441.587 204.603 433.18 201.05C424.773 197.41 417.363 192.383 410.95 185.97C404.623 179.557 399.683 172.19 396.13 163.87C392.577 155.463 390.8 146.45 390.8 136.83C390.8 127.557 392.533 118.847 396 110.7C399.467 102.467 404.277 95.2733 410.43 89.12C416.583 82.9667 423.69 78.1567 431.75 74.69C439.897 71.1367 448.607 69.36 457.88 69.36C467.327 69.36 475.647 71.5267 482.84 75.86C490.12 80.1067 496.143 85.5667 500.91 92.24L499.74 73ZM459.44 180.25C467.067 180.25 473.74 178.387 479.46 174.66C485.18 170.847 489.6 165.733 492.72 159.32C495.927 152.907 497.53 145.8 497.53 138C497.53 130.113 495.927 122.963 492.72 116.55C489.513 110.137 485.05 105.067 479.33 101.34C473.697 97.5267 467.067 95.62 459.44 95.62C451.9 95.62 445.01 97.5267 438.77 101.34C432.53 105.153 427.59 110.267 423.95 116.68C420.31 123.093 418.49 130.2 418.49 138C418.49 145.887 420.353 153.037 424.08 159.45C427.893 165.777 432.877 170.847 439.03 174.66C445.27 178.387 452.073 180.25 459.44 180.25ZM552.721 203V73H579.761V86.78C584.268 81.4067 589.771 77.16 596.271 74.04C602.858 70.92 609.964 69.36 617.591 69.36C626.864 69.36 635.401 71.6133 643.201 76.12C651.001 80.54 657.198 86.4333 661.791 93.8C666.384 86.4333 672.494 80.54 680.121 76.12C687.834 71.6133 696.328 69.36 705.601 69.36C715.221 69.36 723.974 71.7 731.861 76.38C739.748 81.06 746.031 87.3433 750.711 95.23C755.391 103.117 757.731 111.87 757.731 121.49V203H730.691V128.38C730.691 122.66 729.304 117.417 726.531 112.65C723.758 107.883 720.031 104.027 715.351 101.08C710.671 98.1333 705.471 96.66 699.751 96.66C694.031 96.66 688.831 98.0467 684.151 100.82C679.471 103.593 675.744 107.363 672.971 112.13C670.198 116.897 668.811 122.313 668.811 128.38V203H641.771V128.38C641.771 122.313 640.384 116.897 637.611 112.13C634.838 107.363 631.068 103.593 626.301 100.82C621.621 98.0467 616.421 96.66 610.701 96.66C605.068 96.66 599.868 98.1333 595.101 101.08C590.421 104.027 586.694 107.883 583.921 112.65C581.148 117.417 579.761 122.66 579.761 128.38V203H552.721ZM810.816 268H783.776V73H810.816V92.11C815.149 85.4367 820.696 80.02 827.456 75.86C834.216 71.7 842.189 69.62 851.376 69.62C860.822 69.62 869.662 71.3967 877.896 74.95C886.216 78.5033 893.496 83.4433 899.736 89.77C905.976 96.01 910.872 103.247 914.426 111.48C917.979 119.713 919.756 128.553 919.756 138C919.756 147.447 917.979 156.33 914.426 164.65C910.872 172.97 905.976 180.293 899.736 186.62C893.496 192.86 886.216 197.757 877.896 201.31C869.662 204.863 860.822 206.64 851.376 206.64C842.189 206.64 834.216 204.56 827.456 200.4C820.696 196.153 815.149 190.737 810.816 184.15V268ZM851.116 95.75C843.576 95.75 836.946 97.6567 831.226 101.47C825.506 105.283 821.042 110.397 817.836 116.81C814.629 123.137 813.026 130.2 813.026 138C813.026 145.8 814.629 152.907 817.836 159.32C821.042 165.733 825.506 170.847 831.226 174.66C836.946 178.473 843.576 180.38 851.116 180.38C858.569 180.38 865.416 178.517 871.656 174.79C877.896 170.977 882.879 165.863 886.606 159.45C890.332 153.037 892.196 145.887 892.196 138C892.196 130.287 890.332 123.223 886.606 116.81C882.966 110.397 878.026 105.283 871.786 101.47C865.546 97.6567 858.656 95.75 851.116 95.75ZM938.405 73H965.445V203H938.405V73ZM952.185 54.15C948.025 54.15 944.558 52.8067 941.785 50.12C939.011 47.4333 937.625 44.0533 937.625 39.98C937.625 35.9933 939.011 32.6567 941.785 29.97C944.558 27.1967 947.981 25.81 952.055 25.81C956.041 25.81 959.421 27.1967 962.195 29.97C964.968 32.6567 966.355 35.9933 966.355 39.98C966.355 44.0533 964.968 47.4333 962.195 50.12C959.508 52.8067 956.171 54.15 952.185 54.15ZM995.534 203V73H1022.57V86.78C1027.08 81.4067 1032.63 77.16 1039.21 74.04C1045.8 70.92 1052.91 69.36 1060.53 69.36C1065.39 69.36 1070.2 70.01 1074.96 71.31L1064.17 98.61C1060.79 97.31 1057.41 96.66 1054.03 96.66C1048.31 96.66 1043.07 98.09 1038.3 100.95C1033.54 103.723 1029.72 107.493 1026.86 112.26C1024 117.027 1022.57 122.313 1022.57 128.12V203H995.534ZM1141.09 206.38C1129.13 206.38 1118.21 203.303 1108.33 197.15C1098.54 190.997 1090.7 182.763 1084.8 172.45C1079 162.05 1076.09 150.567 1076.09 138C1076.09 128.467 1077.78 119.583 1081.16 111.35C1084.54 103.03 1089.18 95.75 1095.07 89.51C1101.05 83.1833 1107.99 78.2433 1115.87 74.69C1123.76 71.1367 1132.17 69.36 1141.09 69.36C1151.06 69.36 1160.2 71.44 1168.52 75.6C1176.84 79.6733 1183.95 85.35 1189.84 92.63C1195.74 99.8233 1200.07 108.143 1202.84 117.59C1205.62 126.95 1206.44 136.917 1205.31 147.49H1105.08C1106.21 153.47 1108.38 158.887 1111.58 163.74C1114.88 168.507 1119.04 172.277 1124.06 175.05C1129.18 177.823 1134.85 179.253 1141.09 179.34C1147.68 179.34 1153.66 177.693 1159.03 174.4C1164.49 171.107 1168.96 166.557 1172.42 160.75L1199.85 167.12C1194.65 178.647 1186.81 188.093 1176.32 195.46C1165.84 202.74 1154.09 206.38 1141.09 206.38ZM1104.17 126.82H1178.01C1177.15 120.58 1174.94 114.947 1171.38 109.92C1167.92 104.807 1163.54 100.777 1158.25 97.83C1153.05 94.7967 1147.33 93.28 1141.09 93.28C1134.94 93.28 1129.22 94.7533 1123.93 97.7C1118.73 100.647 1114.4 104.677 1110.93 109.79C1107.55 114.817 1105.3 120.493 1104.17 126.82Z"
                      />
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
                    <li>
                      <Link
                        href="./solution.html"
                        className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4">
                        <span>Solution</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="./customers.html"
                        className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4">
                        <span>Customers</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="./pricing.html"
                        className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4">
                        <span>Pricing</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="./blog.html"
                        className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4">
                        <span>Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="./about.html"
                        className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4">
                        <span>Company</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
                  <Link
                    href="./contact.html"
                    className="relative ml-auto flex h-9 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
                    <span className="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-primary lg:dark:text-white">
                      Get started
                    </span>
                  </Link>
                </div>
                <button
                  aria-label="switch theme"
                  className="switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50  before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex">
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
              <div className="fixed top-3 right-14 z-20 sm:right-24 lg:hidden">
                <button
                  aria-label="switche theme"
                  className="switcher group relative flex h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50  before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
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

      <div className="overflow-x-hidden border-b border-gray-100 pt-36 dark:border-gray-800 sm:pt-40 md:pt-48 lg:pt-56">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="z-10">
            <h1 className="relative text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl xl:mx-auto xl:w-4/5">
              Labore non impedit officia quod, ducimus quasi sed culpa saepe
              blanditiis hic omnis rerum!
            </h1>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:mt-16 lg:mt-20">
              <div className="flex h-12 w-12 rounded-xl border border-primary/20 bg-white shadow-md shadow-primary/10 dark:border-gray-700 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="m-auto h-6 w-6 text-primary dark:text-blue-300">
                  <path
                    className="text-primaryLight"
                    fill-rule="evenodd"
                    d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="h-10 w-10 rounded-full"
                  src="./../images/avatars/avatar-2.webp"
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h2 className="leading-0 text-lg font-medium text-gray-700 dark:text-white">
                    Randy Doe
                  </h2>
                  <p className="leading-0 -mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                    22.11.2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 mt-12 sm:-mx-12 sm:mt-16 md:mx-0 md:mt-20">
            <img
              className="md:rounded-3xl"
              src="./../images/blog/blog-cover2.webp"
              alt="blog cover"
              width="1556"
              height="778"
            />
            <div className="flex items-center justify-center gap-4 py-6">
              <span className="font-medium text-gray-500 dark:text-gray-400">
                Share on :
              </span>
              <Link
                href="#"
                className="flex h-10 w-10 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight">
                <svg
                  aria-label="twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="m-auto w-5"
                  viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="instagram"
                className="flex h-10 w-10 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="facebook"
                className="flex h-10 w-10 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primaryLight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="-mx-4 border-y border-gray-100 dark:border-gray-800 sm:-mx-12 lg:mx-0">
            <div className="mx-auto max-w-3xl space-y-12 py-12 px-4 text-gray-600 dark:text-gray-400 sm:px-12 xl:px-0">
              <div className="space-y-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ducimus corporis dolores dolorem voluptas expedita, nulla
                  explicabo qui aliquid facilis quam, facere voluptatem
                  accusantium minus recusandae, exercitationem ipsam alias
                  impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ducimus corporis dolores dolorem voluptas expedita, nulla
                  explicabo qui aliquid facilis quam, facere voluptatem
                  accusantium minus recusandae, exercitationem ipsam alias
                  impedit.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                  Consectetur adipisicing elit. Rem ducimus corporis
                </h2>
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    ducimus corporis dolores dolorem voluptas expedita, nulla
                    explicabo qui aliquid facilis quam, facere voluptatem
                    accusantium minus recusandae, exercitationem ipsam alias
                    impedit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    ducimus corporis dolores dolorem voluptas expedita, nulla
                    explicabo qui aliquid facilis quam, facere voluptatem
                    accusantium minus recusandae, exercitationem ipsam alias
                    impedit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident accusantium placeat distinctio ratione
                    reprehenderit quam quasi quia, dolores facilis quod cumque
                    tempore? Dolorem nisi, aperiam harum nam repellendus
                    deleniti odio.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                  Rem ducimus corporis
                </h2>
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    ducimus corporis dolores dolorem voluptas expedita, nulla
                    explicabo qui aliquid facilis quam, facere voluptatem
                    accusantium minus recusandae, exercitationem ipsam alias
                    impedit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet{" "}
                    <Link
                      href="#"
                      className="font-medium text-primary underline dark:text-primaryLight">
                      Rem ducimus corporis
                    </Link>{" "}
                    dolores dolorem voluptas expedita, nulla explicabo qui
                    aliquid facilis quam, facere voluptatem accusantium minus
                    recusandae, exercitationem ipsam alias impedit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident accusantium placeat distinctio ratione
                    reprehenderit quam quasi quia, dolores facilis quod cumque
                    tempore? Dolorem nisi, aperiam harum nam repellendus
                    deleniti odio.
                  </p>
                </div>
                <img
                  className="rounded-3xl"
                  src="./../images/blog/blog-cover.webp"
                  alt="blog cover"
                  width="1556"
                  height="778"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                  Our New Design System
                </h2>
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    ducimus corporis dolores dolorem voluptas expedita, nulla
                    explicabo qui aliquid facilis quam, facere voluptatem
                    accusantium minus recusandae, exercitationem ipsam alias
                    impedit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    ducimus corporis dolores dolorem voluptas expedita, nulla
                    explicabo qui aliquid facilis quam, facere voluptatem
                    accusantium minus recusandae, exercitationem ipsam alias
                    impedit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident accusantium placeat distinctio ratione
                    reprehenderit quam quasi quia, dolores facilis quod cumque
                    tempore? Dolorem nisi, aperiam harum nam repellendus
                    deleniti odio.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
                  <img
                    className="rounded-3xl"
                    src="./../images/blog/cover.webp"
                    alt="blog cover"
                    width="1000"
                    height="678"
                  />
                  <p>
                    Similique, voluptate fugit esse quidem cum voluptatibus
                    quibusdam facere corrupti! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Cupiditate recusandae
                    repellendus aliquid distinctio illo et fuga. Nesciunt nobis
                    consequuntur id a dignissimos molestias modi, error, cumque
                    aliquid possimus recusandae quisquam.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                  Conclusion
                </h2>
                <div className="space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    ducimus corporis dolores dolorem voluptas expedita, nulla
                    explicabo qui aliquid facilis quam, facere voluptatem
                    accusantium minus recusandae, exercitationem ipsam alias
                    impedit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident accusantium placeat distinctio ratione
                    reprehenderit quam quasi quia, dolores facilis quod cumque
                    tempore? Dolorem nisi, aperiam harum nam repellendus
                    deleniti odio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-100 py-20 dark:border-gray-800">
            <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-white">
              Don't miss an article
            </h3>
            <form
              action=""
              method="post"
              className="relative z-10 mx-auto mt-8 flex items-center gap-4 dark:text-white sm:w-4/5 md:w-3/5 lg:w-2/5">
              <div className="relative flex w-full items-center sm:w-4/5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="absolute left-4 h-5 w-5 text-gray-500 dark:text-gray-300">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                </svg>
                <input
                  name="email"
                  aria-label="your email"
                  type="email"
                  placeholder="Your email to get all updates"
                  autoComplete="username"
                  className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-12 pr-5 text-sm placeholder-gray-500 shadow shadow-gray-600/10 invalid:border-red-500 dark:border-gray-700 dark:bg-gray-900 dark:placeholder-gray-200 dark:shadow-blue-900/20"
                />
              </div>
              <button
                type="submit"
                aria-label="send"
                name="subscribe"
                className="relative flex h-11 w-16 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-max">
                <span className="relative hidden text-base font-semibold leading-3 text-white dark:text-gray-900 sm:block">
                  Subscribe
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 sm:hidden">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </form>
          </div>

          <div className="mx-auto py-20 lg:w-3/5">
            <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-white">
              Next article
            </h3>
            <div className="mt-8">
              <Link href="./blog_single.html">
                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:grid sm:grid-cols-3 sm:gap-8 sm:p-8">
                  <img
                    className="h-56 w-full rounded-lg object-cover object-top transition duration-500 group-hover:scale-105 sm:col-span-1 sm:h-full"
                    src="./../images/blog/blog-cover2.webp"
                    alt="blog cover"
                    width="1556"
                    height="778"
                  />
                  <div className="sm:col-span-2 sm:p-2 sm:pl-0">
                    <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">
                      Jul 27 2022
                    </span>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      Provident de illo eveniet commodi fuga fugiat laboriosam
                      expedita.
                    </h3>
                    <p className="my-6 text-gray-600 dark:text-gray-300">
                      Laudantium in, voluptates ex placeat quo harum aliquam
                      totam, doloribus eum impedit atque...
                    </p>

                    <div className="flex justify-start gap-4">
                      <span className="rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300">
                        {" "}
                        Tailwindcss{" "}
                      </span>
                      <span className="rounded-full border border-gray-100 px-3 py-1 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300">
                        {" "}
                        VueJS{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="my-32">
        <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
          <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
            <div className="it absolute inset-0 flex flex-wrap opacity-40 blur-3xl dark:opacity-70">
              <div aria-hidden="true" className="h-1/2 w-1/2 bg-primary"></div>
              <div
                aria-hidden="true"
                className="h-1/2 w-1/2 bg-purple-500"></div>
              <div
                aria-hidden="true"
                className="h-1/2 w-1/2 rounded-bl-full bg-secondary"></div>
              <div
                aria-hidden="true"
                className="h-1/2 w-1/2 rounded-br-full bg-secondaryLight"></div>
            </div>
            <svg
              className="relative m-auto h-12 w-auto text-blue-900 dark:text-white"
              viewBox="0 0 290 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M184.589 48.5615L259.174 177.176C271.689 198.757 264.34 226.397 242.76 238.912C221.862 251.03 195.284 244.523 182.258 224.504L168.033 245.393C189.368 269.831 225.685 276.557 254.799 259.673C287.846 240.509 299.1 198.183 279.936 165.136L204.374 34.8366C201.937 30.6351 199.126 26.7859 196.008 23.3066L184.589 48.5615Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M184.19 92.696L108.622 222.992C96.1058 244.572 68.4656 251.92 46.8855 239.405C25.3055 226.889 17.9575 199.249 30.4733 177.668L106.042 47.3721C118.558 25.792 146.198 18.444 167.778 30.9599C189.358 43.4757 196.706 71.116 184.19 92.696ZM85.2807 35.3313C104.447 2.28524 146.773 -8.96694 179.819 10.1989C212.865 29.3647 224.117 71.6908 204.951 104.737L129.383 235.033C110.217 268.079 67.8908 279.331 34.8447 260.166C1.79866 241 -9.45348 198.674 9.71234 165.628L85.2807 35.3313Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M108.622 222.992L184.19 92.696C196.706 71.116 189.358 43.4757 167.778 30.9599C146.198 18.444 118.558 25.792 106.042 47.3721L30.4733 177.668C17.9575 199.248 25.3054 226.889 46.8855 239.405C68.4656 251.92 96.1058 244.572 108.622 222.992ZM179.819 10.1989C146.773 -8.96694 104.447 2.28524 85.2807 35.3313L9.71233 165.628C-9.4535 198.674 1.79865 241 34.8447 260.166C67.8907 279.331 110.217 268.079 129.383 235.033L204.951 104.737C224.117 71.6908 212.865 29.3647 179.819 10.1989Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="relative -mt-12">
            <h2 className="mb-8 text-4xl font-bold text-blue-900 dark:text-white md:text-6xl">
              Improve your
              <span className="relative">
                <svg
                  className="absolute inset-x-0 -bottom-1 w-full opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  viewBox="0 0 260 15.6">
                  <path
                    className="st0"
                    d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z"
                  />
                  <path
                    className="st0"
                    d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
                  />
                  <path
                    className="st0"
                    d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z"
                  />
                </svg>
                <span className="relative px-2 text-blue-800 dark:text-indigo-200">
                  workflow
                </span>
              </span>
            </h2>
            <p className="mb-12 mt-6 text-gray-600 dark:text-gray-300 md:mx-auto md:w-5/6 lg:w-1/2">
              Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi
              esse aspernatur impedit nihil quisquam, voluptates placeat
              architecto adipisci id cum enim.
            </p>
            <Link
              href="contact.html"
              className="relative mx-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
              <span className="relative text-base font-semibold text-white dark:text-gray-900">
                Get started
              </span>
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-100 pt-32 pb-8 dark:border-gray-800">
        <div>
          <div className="m-auto space-y-8 px-4 text-gray-600 dark:text-gray-400 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="grid grid-cols-8 gap-6 md:gap-0">
              <div className="col-span-8 md:col-span-2 lg:col-span-3">
                <div className="flex h-full items-center justify-between gap-6 border-b border-white py-6 dark:border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                  <div>
                    <Link
                      href="/index.html"
                      aria-label="ampire logo"
                      className="flex items-center">
                      <svg
                        className="h-7 w-auto"
                        viewBox="0 0 1206 270"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4_24)">
                          <path
                            className="fill-[#24221B] dark:fill-white"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M184.589 48.5615L259.174 177.176C271.689 198.757 264.34 226.397 242.76 238.912C221.862 251.03 195.284 244.523 182.258 224.504L168.033 245.393C189.368 269.831 225.685 276.557 254.799 259.673C287.846 240.509 299.1 198.183 279.936 165.136L204.374 34.8366C201.937 30.6351 199.126 26.7859 196.008 23.3066L184.589 48.5615Z"
                          />
                          <path
                            className="fill-[#24221B] dark:fill-white"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M184.19 92.696L108.622 222.992C96.1058 244.572 68.4656 251.92 46.8855 239.405C25.3055 226.889 17.9575 199.249 30.4733 177.668L106.042 47.3721C118.558 25.792 146.198 18.444 167.778 30.9599C189.358 43.4757 196.706 71.116 184.19 92.696ZM85.2807 35.3313C104.447 2.28524 146.773 -8.96694 179.819 10.1989C212.865 29.3647 224.117 71.6908 204.951 104.737L129.383 235.033C110.217 268.079 67.8908 279.331 34.8447 260.166C1.79866 241 -9.45348 198.674 9.71234 165.628L85.2807 35.3313Z"
                          />
                          <path
                            className="fill-[#24221B] dark:fill-white"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M108.622 222.992L184.19 92.696C196.706 71.116 189.358 43.4757 167.778 30.9599C146.198 18.444 118.558 25.792 106.042 47.3721L30.4733 177.668C17.9575 199.248 25.3054 226.889 46.8855 239.405C68.4656 251.92 96.1058 244.572 108.622 222.992ZM179.819 10.1989C146.773 -8.96694 104.447 2.28524 85.2807 35.3313L9.71233 165.628C-9.4535 198.674 1.79865 241 34.8447 260.166C67.8907 279.331 110.217 268.079 129.383 235.033L204.951 104.737C224.117 71.6908 212.865 29.3647 179.819 10.1989Z"
                          />
                          <path
                            className="fill-[#24221B] dark:fill-white"
                            d="M499.74 73H526.78V203H499.61L498.57 184.15C494.757 190.823 489.6 196.197 483.1 200.27C476.6 204.343 468.93 206.38 460.09 206.38C450.557 206.38 441.587 204.603 433.18 201.05C424.773 197.41 417.363 192.383 410.95 185.97C404.623 179.557 399.683 172.19 396.13 163.87C392.577 155.463 390.8 146.45 390.8 136.83C390.8 127.557 392.533 118.847 396 110.7C399.467 102.467 404.277 95.2733 410.43 89.12C416.583 82.9667 423.69 78.1567 431.75 74.69C439.897 71.1367 448.607 69.36 457.88 69.36C467.327 69.36 475.647 71.5267 482.84 75.86C490.12 80.1067 496.143 85.5667 500.91 92.24L499.74 73ZM459.44 180.25C467.067 180.25 473.74 178.387 479.46 174.66C485.18 170.847 489.6 165.733 492.72 159.32C495.927 152.907 497.53 145.8 497.53 138C497.53 130.113 495.927 122.963 492.72 116.55C489.513 110.137 485.05 105.067 479.33 101.34C473.697 97.5267 467.067 95.62 459.44 95.62C451.9 95.62 445.01 97.5267 438.77 101.34C432.53 105.153 427.59 110.267 423.95 116.68C420.31 123.093 418.49 130.2 418.49 138C418.49 145.887 420.353 153.037 424.08 159.45C427.893 165.777 432.877 170.847 439.03 174.66C445.27 178.387 452.073 180.25 459.44 180.25ZM552.721 203V73H579.761V86.78C584.268 81.4067 589.771 77.16 596.271 74.04C602.858 70.92 609.964 69.36 617.591 69.36C626.864 69.36 635.401 71.6133 643.201 76.12C651.001 80.54 657.198 86.4333 661.791 93.8C666.384 86.4333 672.494 80.54 680.121 76.12C687.834 71.6133 696.328 69.36 705.601 69.36C715.221 69.36 723.974 71.7 731.861 76.38C739.748 81.06 746.031 87.3433 750.711 95.23C755.391 103.117 757.731 111.87 757.731 121.49V203H730.691V128.38C730.691 122.66 729.304 117.417 726.531 112.65C723.758 107.883 720.031 104.027 715.351 101.08C710.671 98.1333 705.471 96.66 699.751 96.66C694.031 96.66 688.831 98.0467 684.151 100.82C679.471 103.593 675.744 107.363 672.971 112.13C670.198 116.897 668.811 122.313 668.811 128.38V203H641.771V128.38C641.771 122.313 640.384 116.897 637.611 112.13C634.838 107.363 631.068 103.593 626.301 100.82C621.621 98.0467 616.421 96.66 610.701 96.66C605.068 96.66 599.868 98.1333 595.101 101.08C590.421 104.027 586.694 107.883 583.921 112.65C581.148 117.417 579.761 122.66 579.761 128.38V203H552.721ZM810.816 268H783.776V73H810.816V92.11C815.149 85.4367 820.696 80.02 827.456 75.86C834.216 71.7 842.189 69.62 851.376 69.62C860.822 69.62 869.662 71.3967 877.896 74.95C886.216 78.5033 893.496 83.4433 899.736 89.77C905.976 96.01 910.872 103.247 914.426 111.48C917.979 119.713 919.756 128.553 919.756 138C919.756 147.447 917.979 156.33 914.426 164.65C910.872 172.97 905.976 180.293 899.736 186.62C893.496 192.86 886.216 197.757 877.896 201.31C869.662 204.863 860.822 206.64 851.376 206.64C842.189 206.64 834.216 204.56 827.456 200.4C820.696 196.153 815.149 190.737 810.816 184.15V268ZM851.116 95.75C843.576 95.75 836.946 97.6567 831.226 101.47C825.506 105.283 821.042 110.397 817.836 116.81C814.629 123.137 813.026 130.2 813.026 138C813.026 145.8 814.629 152.907 817.836 159.32C821.042 165.733 825.506 170.847 831.226 174.66C836.946 178.473 843.576 180.38 851.116 180.38C858.569 180.38 865.416 178.517 871.656 174.79C877.896 170.977 882.879 165.863 886.606 159.45C890.332 153.037 892.196 145.887 892.196 138C892.196 130.287 890.332 123.223 886.606 116.81C882.966 110.397 878.026 105.283 871.786 101.47C865.546 97.6567 858.656 95.75 851.116 95.75ZM938.405 73H965.445V203H938.405V73ZM952.185 54.15C948.025 54.15 944.558 52.8067 941.785 50.12C939.011 47.4333 937.625 44.0533 937.625 39.98C937.625 35.9933 939.011 32.6567 941.785 29.97C944.558 27.1967 947.981 25.81 952.055 25.81C956.041 25.81 959.421 27.1967 962.195 29.97C964.968 32.6567 966.355 35.9933 966.355 39.98C966.355 44.0533 964.968 47.4333 962.195 50.12C959.508 52.8067 956.171 54.15 952.185 54.15ZM995.534 203V73H1022.57V86.78C1027.08 81.4067 1032.63 77.16 1039.21 74.04C1045.8 70.92 1052.91 69.36 1060.53 69.36C1065.39 69.36 1070.2 70.01 1074.96 71.31L1064.17 98.61C1060.79 97.31 1057.41 96.66 1054.03 96.66C1048.31 96.66 1043.07 98.09 1038.3 100.95C1033.54 103.723 1029.72 107.493 1026.86 112.26C1024 117.027 1022.57 122.313 1022.57 128.12V203H995.534ZM1141.09 206.38C1129.13 206.38 1118.21 203.303 1108.33 197.15C1098.54 190.997 1090.7 182.763 1084.8 172.45C1079 162.05 1076.09 150.567 1076.09 138C1076.09 128.467 1077.78 119.583 1081.16 111.35C1084.54 103.03 1089.18 95.75 1095.07 89.51C1101.05 83.1833 1107.99 78.2433 1115.87 74.69C1123.76 71.1367 1132.17 69.36 1141.09 69.36C1151.06 69.36 1160.2 71.44 1168.52 75.6C1176.84 79.6733 1183.95 85.35 1189.84 92.63C1195.74 99.8233 1200.07 108.143 1202.84 117.59C1205.62 126.95 1206.44 136.917 1205.31 147.49H1105.08C1106.21 153.47 1108.38 158.887 1111.58 163.74C1114.88 168.507 1119.04 172.277 1124.06 175.05C1129.18 177.823 1134.85 179.253 1141.09 179.34C1147.68 179.34 1153.66 177.693 1159.03 174.4C1164.49 171.107 1168.96 166.557 1172.42 160.75L1199.85 167.12C1194.65 178.647 1186.81 188.093 1176.32 195.46C1165.84 202.74 1154.09 206.38 1141.09 206.38ZM1104.17 126.82H1178.01C1177.15 120.58 1174.94 114.947 1171.38 109.92C1167.92 104.807 1163.54 100.777 1158.25 97.83C1153.05 94.7967 1147.33 93.28 1141.09 93.28C1134.94 93.28 1129.22 94.7533 1123.93 97.7C1118.73 100.647 1114.4 104.677 1110.93 109.79C1107.55 114.817 1105.3 120.493 1104.17 126.82Z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4_24">
                            <rect width="1206" height="270" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <Link
                      href="https://tailus.io"
                      className="mt-2 inline-block text-sm">
                      Designed by Tailus in Lubumbashi{" "}
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
                      Company
                    </h2>
                    <ul className="mt-4 list-inside space-y-4">
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Enterprise
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Partners
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Jobs
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                      Products
                    </h2>
                    <ul className="mt-4 list-inside space-y-4">
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Enterprise
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Partners
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Jobs
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                      Ressources
                    </h2>
                    <ul className="mt-4 list-inside space-y-4">
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Enterprise
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Partners
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white">
                          Jobs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between text-sm md:pl-16">
                  <span>&copy; tailus 2003 - Present</span>
                  <span>All right reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default BlogSingle;
