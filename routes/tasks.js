const Task = require("../models/tasks");
const express = require("express");
const router = express.Router();

// Add a new Task
router.post("/", async (request, response) => {
  try {
    // saves the task data to mongodb using schema
    const result = await new Task(request.body).save();
    console.log(result);
    response.send(result);
  } catch (error) {
    response.send(error);
  }
});

router.get("/", async (request, response) => {
  try {
    const result = await Task.find();
    response.send(result);
  } catch (error) {
    response.send(error);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const result = await Task.findOneAndUpdate(
      { _id: request.params.id },
      request.body
    );
    response.send(result);
  } catch (error) {
    response.send(error);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const result = await Task.findByIdAndDelete(request.params.id);
    response.send(result);
  } catch (error) {
    response.send(error);
  }
});

module.exports = router;
