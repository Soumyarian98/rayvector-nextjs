import AboutUsTimeline from "@/sections/about-us-timeline";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import TeamMembers from "@/sections/team-members";
import Link from "next/link";
import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { client } from "../../sanity/lib/client";
import BannerText from "@/components/banner-text";

export const getStaticProps = async () => {
  const data = await client.fetch(`*[_type == "aboutUs"]`);

  return {
    props: {
      data: data?.[0] ? data[0] : null,
    },
    revalidate: 300,
  };
};

const About = ({ data }: any) => {
  return (
    <div>
      <BannerText title={data?.bannerTitle} subtitle={data?.bannerSubtitle} />

      <AboutUsTimeline />
      <TeamMembers />
      <Footer />
    </div>
  );
};

export default About;
