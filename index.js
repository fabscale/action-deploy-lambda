const core = require("@actions/core");
const fs = require("fs");
const {
  LambdaClient,
  UpdateFunctionCodeCommand,
} = require("@aws-sdk/client-lambda");

async function run() {
  let region = core.getInput("region");
  let zip = core.getInput("zip");
  let functionName = core.getInput("functionName");

  let zipBuffer = fs.readFileSync(zip);

  let client = new LambdaClient({ region });

  let params = {
    FunctionName: functionName,
    Publish: true,
    ZipFile: zipBuffer,
  };

  let command = new UpdateFunctionCodeCommand(params);

  await client.send(command);
}

(async function () {
  try {
    await run();
  } catch (error) {
    core.error(error.message);
    core.setFailed(error.message);
  }
})();
