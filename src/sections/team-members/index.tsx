import { sanityImageUrlBuilder } from "@/utils/sanityImageUrlBuilder";
import Link from "next/link";
import React, { FC } from "react";
import { FiLinkedin } from "react-icons/fi";

interface Props {
  title: string;
  subtitle: string;
  members: any[];
}

const TeamMembers: FC<Props> = ({ title, subtitle, members }) => {
  return (
    <section className="py-16">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 text-center text-gray-700 dark:text-gray-300 md:w-2/3">
          {subtitle}
        </p>
        <div className="mt-20">
          <div className="mx-auto flex flex-wrap justify-center gap-x-6 gap-y-16 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((m, i) => {
              return (
                <div key={i} className="flex flex-col items-center">
                  <img
                    src={sanityImageUrlBuilder(m.image)
                      .width(200)
                      .height(200)
                      .url()}
                    alt="team member"
                    className="h-32 w-32 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {m.name}
                    </h3>
                    <span className="block text-gray-500 dark:text-gray-300">
                      {m.Position}
                    </span>
                    <div className="mt-4 flex flex-col items-center">
                      {m.linedIn && (
                        <Link href={m.linedIn}>
                          <FiLinkedin />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
