import express from "express";
import bodyParser from "body-parser";
import http from "http";

import cookieParser from "cookie-parser";
import expressSession from "express-session";
import path from "path";

import routes from "./routes";
import cors from "cors";

const port = 3000;
const app = express();

app.use(
  expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/", express.static(path.resolve("public")));
app.use("/api", routes);

http.createServer(app).listen(port, () => {
  console.log(`Listen to port:${port}`);
});
