import { GetStaticPropsContext } from "next";
import React from "react";
import { client } from "../../../sanity/lib/client";
import BannerText from "@/components/banner-text";
import PortableText from "react-portable-text";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const id = params!.id;

  const data = await client.fetch(
    `*[_type == "careers" && contentHandle.current == '${id}']`
  );

  return {
    props: {
      data: data?.[0] ? data[0] : null,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const JobDetails = ({ data }: any) => {
  return (
    <div>
      <BannerText title={data?.bannerTitle} subtitle={data?.bannerSubtitle} />
      {data?.sections.map((s: any) => {
        return (
          <section className="py-16">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
                {s.title}
              </h2>
              <div className="mt-8 text-gray-600 dark:text-gray-300">
                <PortableText content={s.description} />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default JobDetails;
