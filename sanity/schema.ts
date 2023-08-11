import { type SchemaTypeDefinition } from "sanity";

import aboutUs from "./schemas/aboutUs";
import staticPage from "./schemas/staticPage";
import homepage from "./schemas/homepage";
import careers from "./schemas/careers";
import careerPage from "./schemas/careerPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, staticPage, aboutUs, careers, careerPage],
};
