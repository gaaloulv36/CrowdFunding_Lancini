const express = require("express");
const app = express();
const userR = require("./routes/routes");
const founderF = require("./routes/founder1");
const investorI = require("./routes/investor1");
const projectP = require("./routes/project1");

app.use(express.json());
const port = 5000;
app.listen(port, (err) => err ? console.error(err) : console.log("is connected !!"))
app.use("/api/user", userR);
app.use("/api/founder", founderF);
app.use("/api/investor", investorI);
app.use("/api/project", projectP);
/* hello */