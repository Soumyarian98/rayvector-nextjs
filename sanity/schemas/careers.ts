import { defineField, defineType } from "sanity";

export default defineType({
  name: "careers",
  title: "Careers",
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
      title: "Card Image",
      name: "cardImage",
      type: "image",
    }),
    defineField({
      name: "sections",
      title: "sections",
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
          ],
        },
      ],
    }),
  ],
});
