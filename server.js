const express = require("express");
const cors = require("cors");
const app = express();
const port = 8888;
const data = require("./src/data/data");

app.use(cors());
app.get("/scripts", (req, res) => res.status(200).send(data));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
