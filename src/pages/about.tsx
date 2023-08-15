import AboutUsTimeline from "@/sections/about-us-timeline";
import TeamMembers from "@/sections/team-members";
import React from "react";
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
      <AboutUsTimeline
        events={data.timeline.timelineItems}
        title={data.timeline.title}
        subtitle={data.timeline.subtitle}
      />
      <TeamMembers
        title={data.team.title}
        subtitle={data.team.subtitle}
        members={data.team.teamMembers}
      />
    </div>
  );
};

export default About;
