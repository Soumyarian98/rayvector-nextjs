import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "bannerTitle",
      title: "Banner Title",
      type: "string",
    }),
    defineField({
      name: "bannerSubtitle",
      title: "Banner Subtitle",
      type: "string",
    }),
    defineField({
      title: "Banner Image",
      name: "bannerImage",
      type: "image",
    }),
    defineField({
      name: "customerSectionTitle",
      title: "Customer Section Title",
      type: "string",
    }),
    defineField({
      name: "customerLogos",
      title: "Customer Logos",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
