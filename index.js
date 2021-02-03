import express from "express";

import "dotenv/config";
import "./config/dbconnection";

import salesRouter from "./router/saleRecordRouter";

const app = express();
const port = process.env.PORT || 5555;

app.listen(port, console.log("Connected"));

//Routes
app.use("/sales", salesRouter);