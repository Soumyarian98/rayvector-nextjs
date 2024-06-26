import Header from "@/sections/header";
import { GetStaticPropsContext } from "next";
import React from "react";
import { client } from "../../../sanity/lib/client";
import SectionGrid from "@/components/section-grid";
import { sanityImageUrlBuilder } from "@/utils/sanityImageUrlBuilder";
import Footer from "@/sections/footer";
import BannerText from "@/components/banner-text";

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
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

const Solution = ({ data }: any) => {
  return (
    <div>
      <BannerText title={data?.bannerTitle} subtitle={data?.bannerSubtitle} />
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
    </div>
  );
};

export default Solution;
