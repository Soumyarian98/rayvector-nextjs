import { sanityImageUrlBuilder } from "@/utils/sanityImageUrlBuilder";
import React, { FC } from "react";

interface Props {
  title: string;
  subtitle: string;
  events: any[];
}

const AboutUsTimeline: FC<Props> = ({ events, subtitle, title }) => {
  return (
    <section className="relative bg-gray-100 pt-16 dark:bg-darker py-16">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
            {subtitle}
          </p>
        </div>

        <div className="pl-2">
          {events.map((e, i) => {
            return (
              <div
                key={i}
                className="relative py-32 before:absolute before:inset-0 before:mx-auto before:h-full before:w-px after:absolute after:inset-0 after:h-32 after:w-px after:bg-gradient-to-t after:from-gray-900/20 after:via-gray-200 after:before:to-gray-900 dark:after:from-white/20 dark:after:via-gray-800 lg:before:bg-gray-200 lg:after:mx-auto lg:after:bg-gradient-to-b lg:dark:before:bg-gray-900 ">
                <div className="relative flex flex-col items-center gap-10 pb-12 pl-6 before:absolute before:inset-0 before:h-1/2 before:w-px before:bg-gradient-to-b before:from-gray-400/70 before:to-gray-400/70 after:absolute after:inset-x-0 after:bottom-0 after:h-1/2 after:w-px after:border-r after:border-dashed after:border-gray-400/70 dark:before:from-gray-700 dark:before:to-gray-700 dark:after:border-gray-700 sm:pl-12 md:flex-row md:pb-20 lg:pl-0 lg:before:left-[9.1rem] lg:before:from-transparent lg:before:to-gray-400/70 lg:after:left-[9.1rem] dark:lg:before:from-transparent dark:lg:before:to-gray-700">
                  <div className="flex w-full flex-col md:w-1/2 lg:flex-row lg:items-center gap-4">
                    <div className="hidden w-max md:block">
                      <div className="flex h-24 w-24 rounded-full border border-gray-200 bg-white p-4 shadow-xl shadow-gray-600/10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-none gap">
                        <svg
                          aria-hidden="true"
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
                    </div>
                    <div className="">
                      <span className="text-gray-500">
                        {new Date(e.eventDate).getFullYear()}
                      </span>
                      <h3 className="mt-0.5 text-xl font-semibold text-gray-700 dark:text-white">
                        {e.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {e.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img
                      className="h-56 w-full rounded-2xl object-cover md:h-80"
                      src={sanityImageUrlBuilder(e.image).url()}
                      alt="timeline first step"
                      loading="lazy"
                      width="1165"
                      height="864"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUsTimeline;
