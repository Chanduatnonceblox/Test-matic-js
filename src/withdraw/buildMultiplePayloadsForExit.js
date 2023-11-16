const { pos } = require("../../config");
const {, from } = require("../../utils");
const ps = require("prompt-sync");
const { execute } = require("./execute");
const prompt = ps();
exports.prompt = prompt;
execute()
  .then(() => {})
  .catch((err) => {
    console.error("err", err);
  })
  .finally((_) => {
    process.exit(0);
  });
