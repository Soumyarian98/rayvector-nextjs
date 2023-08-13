import Link from "next/link";
import React from "react";
import { FiLinkedin } from "react-icons/fi";

const TeamMembers = () => {
  return (
    <section className="from-gray-100 to-transparent pt-20 dark:from-darker">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
          Our team
        </h2>
        <p className="mx-auto mt-6 text-center text-gray-700 dark:text-gray-300 md:w-2/3">
          Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi esse
          aspernatur impedit nihil quisquam, voluptates placeat architecto
          adipisci id cum enim.
        </p>
        <div className="mt-20">
          <div className="mx-auto flex flex-wrap justify-center gap-x-6 gap-y-16 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <div>
              <img
                src="./../images/team/member1.webp"
                alt="team member"
                className="h-32 w-32 rounded-full object-cover"
                loading="lazy"
                width="267"
                height="267"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Hentoni Doe
                </h3>
                <span className="block text-gray-500 dark:text-gray-300">
                  CEO - Founder
                </span>
                <div className="mt-4">
                  <Link href="/">
                    <FiLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
