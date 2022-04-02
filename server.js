const express = require("express");
const app = express();
const userR = require("./routes/routes");
const cors = require('cors')

const projectP = require("./routes/project1");
const author = require('./routes/auth-api');

app.use(express.json());
app.use(cors())
const port = 5000;
app.listen(port, (err) => err ? console.error(err) : console.log("is connected !!"))
app.use("/api/user", userR);
app.use("/api/project", projectP);
app.use("/test/auth", author);