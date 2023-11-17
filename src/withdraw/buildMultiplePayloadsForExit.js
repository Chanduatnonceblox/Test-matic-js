const { pos } = require("../../config");
const {, from } = require("../../utils");
const ps = require("prompt-sync");
const { execute } = require("./execute");
const prompt = ps();
exports.prompt = prompt;
const execute = async () => {
  const client = await getPOSClient();

  const burnHash = prompt(`Enter burn transaction hash: `);

  //   For withdraw Multiple assets
  const payloads = await client.exitUtil.buildMultiplePayloadsForExit(
    burnHash,
    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  );

  for (let payload of payloads) {
    const result = await client.rootChainManager.exit(payload);
    const txHash = await result.getTransactionHash();
    console.log("txHash", txHash);
    const receipt = await result.getReceipt();
    console.log("receipt", receipt);
  }
};


execute()
  .then(() => {})
  .catch((err) => {
    console.error("err", err);
  })
  .finally((_) => {
    process.exit(0);
  });
