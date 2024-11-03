import express from "express";
import { corsMiddleware } from "./middleware/cors";
import './config/environment.config';


const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

// CORS middleware
app.use(corsMiddleware);

//Routes


export default app;