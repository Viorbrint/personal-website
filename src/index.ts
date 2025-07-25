import express from "express";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { appRouter } from "./router";

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
app.use(expressEjsLayouts);
app.set("layout", "layout");

app.use("/", appRouter);

app
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
  .on("error", () => {
    console.log("Error starting server");
  });
