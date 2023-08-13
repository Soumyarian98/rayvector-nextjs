import Link from "next/link";
import React from "react";

const Privacy = () => {
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
                  className="switcher group relative flex h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
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

      <section className="border-b border-gray-100 pt-32 dark:border-gray-800">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="grid gap-12 border-b border-gray-100 pb-20 dark:border-gray-800 lg:grid-cols-3">
            <div className="sticky top-24 col-span-1 h-max">
              <div className="sticky bg-gray-900 p-8 dark:bg-white sm:p-12">
                <span className="text-lg font-medium text-white dark:text-gray-900">
                  Last Updated 03/28/2019
                </span>
              </div>
            </div>
            <div className="space-y-12 text-gray-600 dark:text-gray-400 lg:col-span-2">
              <h1 className="mt-10 text-6xl font-bold text-gray-800 dark:text-white">
                Privacy Policy
              </h1>
              <div className="space-y-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ducimus corporis dolores dolorem voluptas expedita, nulla
                  explicabo qui aliquid facilis quam, facere voluptatem
                  accusantium minus recusandae, exercitationem ipsam alias
                  impedit. Rem ducimus corporis dolores dolorem voluptas
                  expedita, nulla explicabo qui aliquid facilis quam, facere
                  voluptatem accusantium minus recusandae, exercitationem ipsam
                  alias impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident accusantium placeat distinctio ratione reprehenderit
                  quam quasi quia, dolores facilis quod cumque tempore? Dolorem
                  nisi, aperiam harum nam repellendus deleniti odio.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  1. The service
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ducimus corporis dolores dolorem voluptas expedita, nulla
                  explicabo qui aliquid facilis quam, facere voluptatem
                  accusantium minus recusandae, exercitationem ipsam alias
                  impedit. Rem ducimus corporis dolores dolorem voluptas
                  expedita, nulla explicabo qui aliquid facilis quam, facere
                  voluptatem accusantium minus recusandae, exercitationem ipsam
                  alias impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  debitis cupiditate facilis consectetur hic veniam magnam esse
                  ad vero cumque harum quaerat aspernatur. Laborum porro, id
                  eligendi dolor doloremque voluptatum!
                </p>

                <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                  1.1 Service subscription
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ducimus corporis dolores dolorem voluptas expedita, nulla
                  explicabo qui aliquid facilis quam, facere voluptatem
                  accusantium minus recusandae, exercitationem ipsam alias
                  impedit. Rem ducimus corporis dolores dolorem voluptas
                  expedita, nulla explicabo qui aliquid facilis quam, facere
                  voluptatem accusantium minus recusandae, exercitationem ipsam
                  alias impedit.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                  1.2 Allowed
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ducimus corporis dolores dolorem voluptas expedita, nulla
                  explicabo qui aliquid facilis quam, facere voluptatem
                  accusantium minus recusandae, exercitationem ipsam alias
                  impedit. Rem ducimus corporis dolores dolorem voluptas
                  expedita, nulla explicabo qui aliquid facilis quam, facere
                  voluptatem accusantium minus recusandae, exercitationem ipsam
                  alias impedit.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  2. Restrictions
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ducimus corporis dolores dolorem voluptas expedita, nulla
                  explicabo qui aliquid facilis quam, facere voluptatem
                  accusantium minus recusandae, exercitationem ipsam alias
                  impedit. Rem ducimus corporis dolores dolorem voluptas
                  expedita, nulla explicabo qui aliquid facilis quam, facere
                  voluptatem accusantium minus recusandae, exercitationem ipsam
                  alias impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
                  debitis cupiditate facilis consectetur hic veniam magnam esse
                  ad vero cumque harum quaerat aspernatur. Laborum porro, id
                  eligendi dolor doloremque voluptatum!
                </p>

                <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                  2.1 Copyright terms
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ducimus corporis dolores dolorem voluptas expedita, nulla
                  explicabo qui aliquid facilis quam, facere voluptatem
                  accusantium minus recusandae, exercitationem ipsam alias
                  impedit. Rem ducimus corporis dolores dolorem voluptas
                  expedita, nulla explicabo qui aliquid facilis quam, facere
                  voluptatem accusantium minus recusandae, exercitationem ipsam
                  alias impedit.
                </p>

                <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                  2.2 Access restrictions
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  ducimus corporis dolores dolorem voluptas expedita, nulla
                  explicabo qui aliquid facilis quam, facere voluptatem
                  accusantium minus recusandae, exercitationem ipsam alias
                  impedit. Rem ducimus corporis dolores dolorem voluptas
                  expedita, nulla explicabo qui aliquid facilis quam, facere
                  voluptatem accusantium minus recusandae, exercitationem ipsam
                  alias impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Privacy;
