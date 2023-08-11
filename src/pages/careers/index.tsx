import BannerText from "@/components/banner-text";
import React from "react";
import { client } from "../../../sanity/lib/client";
import PortableText from "react-portable-text";
import { sanityImageUrlBuilder } from "@/utils/sanityImageUrlBuilder";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const data = await client.fetch(`*[_type == "careerPage"]`);
  const cards = await client.fetch(`*[_type == "careers"]`);
  return {
    props: {
      data: data?.[0] ? data[0] : null,
      cards: cards ?? [],
    },
    revalidate: 60,
  };
};

const Careers = ({ data, cards }: any) => {
  const router = useRouter();
  return (
    <div>
      <BannerText title={data?.bannerTitle} subtitle={data?.bannerSubtitle} />
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
              {data?.jobSection.title}
            </h2>
            <div className="mt-8 text-gray-600 dark:text-gray-300">
              <PortableText content={data?.jobSection?.description ?? []} />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
            Vacancies
          </h2>
          <div className="mt-8 text-gray-600 dark:text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((card: any) => {
                return (
                  <div className="dark:bg-gray-800 shadow rounded-md overflow-hidden">
                    <img
                      src={sanityImageUrlBuilder(card.cardImage).url()}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {card.bannerTitle}
                      </h3>
                      <div className="mt-4 text-gray-600 dark:text-gray-300">
                        {card.bannerSubtitle}
                      </div>
                      <div className="mt-6">
                        <button
                          onClick={() =>
                            router.push(
                              `/careers/${card.contentHandle.current}`
                            )
                          }
                          type="submit"
                          aria-label="send"
                          name="subscribe"
                          className="relative flex h-11 w-16 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-max">
                          <span className="relative hidden text-sm font-semibold leading-3 text-white dark:text-gray-900 sm:block">
                            Apply Now
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 sm:hidden">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
