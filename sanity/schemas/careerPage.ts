import { defineField, defineType } from "sanity";

export default defineType({
  name: "careerPage",
  title: "Career Page",
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
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "jobSection",
      title: "Job Section",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          title: "Description",
          name: "description",
          type: "array",
          of: [{ type: "block" }],
        }),
      ],
    }),
  ],
});
