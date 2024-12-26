import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import transactionRoutes from "./routes/transactionRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", transactionRoutes);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("Connection error", error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
