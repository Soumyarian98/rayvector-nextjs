import Header from "@/sections/header";
import { GetStaticPropsContext } from "next";
import React from "react";
import { client } from "../../../sanity/lib/client";
import SectionGrid from "@/components/section-grid";
import { sanityImageUrlBuilder } from "@/utils/sanityImageUrlBuilder";
import Footer from "@/sections/footer";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const id = params!.id;

  const data = await client.fetch(
    `*[_type == "staticPage" && contentHandle.current == '${id}']`
  );

  return {
    props: {
      data: data?.[0] ? data[0] : null,
    },
    revalidate: 300,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const Solution = ({ data }: any) => {
  console.log(data, "dataaa");
  return (
    <body className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary dark:bg-gray-900">
      <Header />
      <section className="pt-32 pb-16 sm:pt-36 md:pt-40 lg:pt-36 relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 top-56 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
          <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
          <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
        </div>
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-7xl">
            {data?.bannerTitle}
          </h1>
          <p className="mt-12 max-w-2xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            {data?.bannerSubtitle}
          </p>
        </div>
      </section>
      {data?.gridSections.map((g: any, i: number) => {
        return (
          <SectionGrid
            key={g._key}
            imagePosition={i % 2 === 0 ? "left" : "right"}
            title={g.title}
            image={sanityImageUrlBuilder(g.image).url()}
            description={g.description}
          />
        );
      })}
      <Footer />
    </body>
  );
};

export default Solution;
