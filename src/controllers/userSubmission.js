const problem = require("../models/problem");
const submission = require("../models/submission");
const {
  getLanguageById,
  submitBatch,
  submitToken,
} = require("../utils/problemUitlity");

const submitCode = async (req, res) => {
  try {
    const userId = req.result._id;
    const problemId = req.params.id;

    const { code, language } = req.body;

    if (!userId || !code || !problemId || !language)
      return res.status(400).send("some field missing");

    const Problem_Data = await problem.findById(problemId);

    if (!Problem_Data) {
      return res.status(404).send("Problem not found");
    }

    const submittedResult = await submission.create({
      userId: userId,
      problemId: problemId,
      code: code,
      language: language,
      status: "pending",
      Totaltestcases: problem.HiddenTestCases.length,
    });

    const langauage_id = getLanguageById(language);
    const submissions = problem.HiddenTestCases.map((testcase) => ({
      source_code: completeCode,
      language_id: languageId,
      stdin: testcase.input,
      expected_output: testcase.output,
    }));

    const submitResult = await submitBatch(submissions);
        
    const resultToken = submitResult.map((value)=> value.token);
    
    const testResult = await submitToken(resultToken);

    console.log(testResult)


    // let testCasesPassed = 0;
    // let runtime = 0;
    // let memory = 0;
    // let status = 'accepted';
    // let errorMessage = null;


    // for(const test of testResult){
    //     if(test.status_id==3){
    //        testCasesPassed++;
    //        runtime = runtime+parseFloat(test.time)
    //        memory = Math.max(memory,test.memory);
    //     }else{
    //       if(test.status_id==4){
    //         status = 'error'
    //         errorMessage = test.stderr
    //       }
    //       else{
    //         status = 'wrong'
    //         errorMessage = test.stderr
    //       }
    //     }
    // }




  } catch (err) {
    throw "ERRor" + err;
  }
};
