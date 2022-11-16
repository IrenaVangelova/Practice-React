const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const config = require("./config");
const posts = require("./data");

const { port, allowedDomains} = config;

const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.get("/api/posts", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888/%27');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    return res.json(posts);
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});