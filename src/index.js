import express from "express";
import morgan from "morgan";

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;

const app = express();
app.use(morgan("dev"));

app.all("/*", (req, res) => {
  res.send("Hello World!!!");
});

app
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
  .on("error", () => {
    console.log("Error starting server");
  });
