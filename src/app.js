import express, { urlencoded } from "express"

// USING COOKIE PARSER : FOR ACCESSING COOKIES
import cookieParser from "cookie-parser";

// USING CORS : CROSS-ORIGIN-RESOURCE SHARING : CONNECTING BACKEND WITH FRONTEND
import cors from "cors";

const app = express();

// app.use(CONFIGURATION_NAME)

// USING THE MIDDLEWARE CORS
app.use(cors());

// PARSING INCOMING REQUESTS TO JSON
// LIMIT IS SET TO 50 KB (CAN BE ANYTIME CHANGED)
app.use(express.json({ limit: "50kb" }));

// ENCODING THE URL LIKE: REPLACING SPACES WITH '%20'
app.use(express.urlencoded({ extended: true, limit: "50kb" }));

// FOR STATIC DATA IN PROJECT LIKE CSS, IMAGES etc.
app.use(express.static("public"));

// USING THE COOKIE PARSER
app.use(cookieParser());
export default app;