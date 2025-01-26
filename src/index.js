import express from "express";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

let data = {
  projects: [
    {
      name: "Forms",
      summary:
        "A customizable forms web application built with .NET Blazor Server. Create, manage, and analyze form templates with user authentication, admin controls, and Salesforce integration.",
      tags: [
        "Dotnet",
        "Docker",
        "Web-Application",
        "Forms",
        "Blazor",
        "User",
        "Awesome",
        "Awesome",
        "Awesome",
      ],
    },
    {
      name: "BookStoreTester",
      summary: "Something",
      tags: [
        "Dotnet",
        "Docker",
        "Web-Application",
        "Forms",
        "Blazor",
        "User",
        "Awesome",
        "Awesome",
        "Awesome",
      ],
    },
    {
      name: "BookStoreTester",
      summary: "Something",
      tags: [
        "Dotnet",
        "Docker",
        "Web-Application",
        "Forms",
        "Blazor",
        "User",
        "Awesome",
        "Awesome",
        "Awesome",
      ],
    },
  ],
};

app.use(expressEjsLayouts);
app.set("layout", "layout");

app.get("/", (_, res) => {
  res.render("index", data);
});

app
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
  .on("error", () => {
    console.log("Error starting server");
  });
