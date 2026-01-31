const express = require('express');
const SubmitRouter = express.Router();
const userMiddleware = require("../middleware/userMiddleware");
const submitCode = require("../controllers/userSubmission");


SubmitRouter.post("/submit/:id", userMiddleware, submitCode);

module.exports = SubmitRouter