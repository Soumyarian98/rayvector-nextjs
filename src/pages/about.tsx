import AboutUsTimeline from "@/sections/about-us-timeline";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import TeamMembers from "@/sections/team-members";
import Link from "next/link";
import React from "react";
import { FiLinkedin } from "react-icons/fi";

const About = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
      <Header />
      ``
      <section className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 top-56 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
          <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
          <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
        </div>
        <div className="mx-auto px-4 pt-32 sm:px-12 sm:pt-40 md:pt-48 lg:pt-56 xl:max-w-6xl xl:px-0">
          <div className="relative z-10">
            <div className="flex flex-col">
              <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl md:text-left lg:text-7xl">
                Advanced, Sustainable,
                <span className="relative">
                  <span className="relative text-blue-800 dark:text-white md:px-2">
                    Innovation
                  </span>
                </span>
              </h1>
              <p className="mt-12 text-center text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:text-left lg:w-3/4">
                Computers used to be magical. But much of that magic has been
                lost over time, replaced by subpar tools and practices that slow
                teams down and hold great work back.
              </p>
            </div>
          </div>
        </div>
      </section>
      <svg
        aria-hidden="true"
        className="text-gray-100 dark:text-darker"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320">
        <path
          fill="currentColor"
          fill-opacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,224C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <AboutUsTimeline />
      <TeamMembers />
      <Footer />
    </div>
  );
};

export default About;
