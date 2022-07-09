const tasks = require("./routes/tasks");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();

connection();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Todo APP API");
});

app.use("/tasks", tasks);

app.listen(process.env.PORT, () =>
  console.log("Server is started in " + process.env.PORT)
);
