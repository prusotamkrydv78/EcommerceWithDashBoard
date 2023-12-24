import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from './routes/authRoutes.js' 
import cors from 'cors'
 import categoryRoutes from './routes/categoryRoutes.js'
 import ProductRoutes from "./routes/ProductRoutes.js";
 
// configure dotenv
dotenv.config();

// database configure here
connectDB();

const PORT = process.env.PORT || 5000;
// websites routes is here
const app = express();

// middlewaressss
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

// routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/product",ProductRoutes)


// rest api
app.get("/", (req, res) => {
  res.send(`<h1>${[process.env.DEV_MODE]}</h1>`);
});

app.listen(PORT, () => {
  console.log(`server is running on  ${PORT}`);
});
