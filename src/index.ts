import express from "express";

const port = Number(process.env.PORT || 3000);
const app = express();

app.get("/", (_req, res) => {
  res.status(200).send();
});

app.listen(port);
