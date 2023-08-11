import { defineField, defineType } from "sanity";

export default defineType({
  name: "staticPage",
  title: "Static Page",
  type: "document",
  fields: [
    defineField({
      name: "bannerTitle",
      title: "Banner Title",
      type: "string",
    }),
    defineField({
      name: "contentHandle",
      title: "Content Handle",
      type: "slug",
      options: { source: "bannerTitle" },
    }),
    defineField({
      name: "bannerSubtitle",
      title: "Banner Subtitle",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "gridSections",
      title: "Grid Sections",
      type: "array",
      of: [
        {
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
            defineField({
              title: "Image",
              name: "image",
              type: "image",
            }),
          ],
        },
      ],
    }),
  ],
});
