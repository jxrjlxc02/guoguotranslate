import { defineConfig } from "sanity";
import { deskTool} from "sanity/desk";

import schemas from "./sanity/schemas";



const config = defineConfig({
    projectId: "e2cqo7j4",

    dataset: "production",

    title: "My Person Website",

    apiVersion: "2023-03-04",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: {types: schemas}
})


export default config;
