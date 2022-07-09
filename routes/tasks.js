const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/", async (request, response) => {
  try {
    const result = await new Task(request.body).save();
    console.log(result);
    response.send(result);
  } catch (error) {
    response.send(error);
  }
});

router.get("/", async (request, response) => {
  try {
    const tasks = await Task.find();
    response.send(tasks);
  } catch (error) {
    response.send(error);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: request.params.id },
      request.body
    );
    response.send(task);
  } catch (error) {
    response.send(error);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const task = await Task.findByIdAndDelete(request.params.id);
    response.send(task);
  } catch (error) {
    response.send(error);
  }
});

module.exports = router;
