import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutUs",
  title: "About Us",
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
      name: "timeline",
      title: "Timeline",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        }),
        defineField({
          name: "timelineItems",
          title: "Timeline Items",
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
                  name: "subtitle",
                  title: "Subtitle",
                  type: "string",
                }),
                defineField({
                  name: "eventDate",
                  title: "Event Date",
                  type: "date",
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
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        }),
        defineField({
          name: "teamMembers",
          title: "Team Members",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "name",
                  title: "Name",
                  type: "string",
                }),
                defineField({
                  name: "Position",
                  title: "Position",
                  type: "string",
                }),
                defineField({
                  title: "Image",
                  name: "image",
                  type: "image",
                }),
                defineField({
                  name: "linedIn",
                  title: "Linked In URL",
                  type: "url",
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
