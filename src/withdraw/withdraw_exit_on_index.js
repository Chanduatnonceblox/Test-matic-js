const { pos } = require("../../config");
const { getPOSClient, from } = require("../../utils");
const ps = require("prompt-sync");
const prompt = ps();
const execute = async () => {
  const client = await getPOSClient();

  const hash = prompt(`Enter burn transaction hash: `);
  const index = prompt(`Enter burn transaction hash: `);

  const erc721Token = client.erc721(pos.parent.erc721, true);
  const result = await erc721Token.withdrawExitOnIndex(hash, index);
  const txHash = await result.getTransactionHash();
  console.log("txHash", txHash);
  const receipt = await result.getReceipt();
  console.log("receipt", receipt);
};
execute()
  .then(() => {})
  .catch((err) => {
    console.error("err", err);
  })
  .finally((_) => {
    process.exit(0);
  });
