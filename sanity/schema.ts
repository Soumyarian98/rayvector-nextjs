import { type SchemaTypeDefinition } from "sanity";

import aboutUs from "./schemas/aboutUs";
import staticPage from "./schemas/staticPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [staticPage, aboutUs],
};
