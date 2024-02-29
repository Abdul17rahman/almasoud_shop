import express, { json } from "express";
import dotenv from "dotenv";
import ProductRounter from "./routes/productsRoute.js";
import connectDb from "./config/db.js";

const app = express();
// connectDb();

app.get("/", (req, res) => {
  res.send({ Status: "Ok" });
});

app.use("/api/product", ProductRounter);

dotenv.config();
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
