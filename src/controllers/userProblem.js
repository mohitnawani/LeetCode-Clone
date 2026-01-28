const problem = require("../models/problem");

const {
  getLanguageById,
  submitBatch,
  submitToken,
} = require("../utils/problemUitlity");

const createProblem = async (req, res) => {
  // console.log(req.body)
  const {
    title,
    description,
    difficulty,
    tags,
    visibleTestCases,
    hiddenTestCases,
    startCode,
    referenceSolution,
    problemCreator,
  } = req.body;

  try {
    for (const { language, completeCode } of referenceSolution) {
      const languageId = getLanguageById(language);
      // console.log(languageId);

      const submissions = visibleTestCases.map((testcase) => ({
        source_code: completeCode,
        language_id: languageId,
        stdin: testcase.input,
        expected_output: testcase.output,
      }));

      //   console.log(submissions);

      const submitResult = await submitBatch(submissions);
      //   console.log(submitResult);

      const tokens = submitResult.map((value) => value.token);
      const finalresult = await submitToken(tokens);

      for (const test of finalresult) {
        if (test.status_id != 3) return res.status(400).send("Error Occured");
      }
    }

    // console.log(req.body);

    const userProblem = await problem.create({
      ...req.body,
      problemCreator: req.result._id,
    });

    res.status(201).send("Problem Saved Successfully");
  } catch (err) {
    throw "error in creating problem" + err;
  }
};

const updateProblem = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    difficulty,
    tags,
    visibleTestCases,
    hiddenTestCases,
    startCode,
    referenceSolution,
    problemCreator,
  } = req.body;

  try {
    if (!id) {
      return res.status(400).send("Missing ID field");
    }
    const valid_id = await problem.findById(id);
    if (!valid_id) {
      return res.status(400).send("Missing ID field");
    }

    for ({ completeCode, language } of referenceSolution) {
      const languageId = getLanguageById(language);
      // console.log(languageId);

      const submissions = visibleTestCases.map((testcase) => ({
        source_code: completeCode,
        language_id: languageId,
        stdin: testcase.input,
        expected_output: testcase.output,
      }));

      const submitResult = await submitBatch(submissions);

      const tokens = submitResult.map((value) => value.token);
      const finalresult = await submitToken(tokens);

      for (const test of finalresult) {
        if (test.status_id != 3) return res.status(400).send("Error Occured");
      }
    }
    // console.log(req.body);

    const newProblem = await problem.findByIdAndUpdate(
      id,
      { ...req.body },
      { runValidators: true, new: true },
    );
    res.status(201).send(newProblem);
  } catch (err) {
    throw "error in creating problem" + err;
  }
};



module.exports = { createProblem, updateProblem };
