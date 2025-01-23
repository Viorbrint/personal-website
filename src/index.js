import express from "express";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";

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

let count = 0;

app.get("/", (_, res) => {
  res.render("index");
});

app.post("/clicked", (_, res) => {
  res.send(String(count));
  count++;
});

app
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
  .on("error", () => {
    console.log("Error starting server");
  });
