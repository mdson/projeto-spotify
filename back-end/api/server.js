import express from "express";
import { db } from "./connect.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server created successfully!");
});

app.get("/artists", async (req, res) => {
  res.json(await db.collection('Artists').find({}).toArray());
});

app.get("/songs", async (req, res) => {
  res.json(await db.collection('Songs').find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
