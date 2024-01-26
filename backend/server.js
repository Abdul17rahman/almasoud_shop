import express, { json } from "express";
// import path from "path";
// import cors from "cors";
import dotenv from "dotenv";
import products from "./products.js";

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

app.get("/", (req, res) => {
  res.send({ Status: "Ok" });
});

app.get("/api/product", (req, res) => {
  res.send({ products });
});

app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send({ product });
});

app.post("/api/product", (req, res) => {
  const {
    _id,
    name,
    description,
    image,
    price,
    season,
    category,
    stock,
    reviews,
    rating,
  } = req.body;
  console.log();
  res.send("Posted");
});

dotenv.config();
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
