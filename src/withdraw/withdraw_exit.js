const { pos } = require("../../config");
const { getPOSClient, from } = require("../../utils");
const ps = require("prompt-sync");
const prompt = ps();
const execute = async () => {
  const client = await getPOSClient();
  const type = prompt(`Enter token Type: "example: erc21,ec20, erc1155" `);
  const hash = prompt(`Enter burn transaction hash: `);
  if (type == "erc721") {
    

    const erc721Token = client.erc721(pos.parent.erc721, true);
    const result = await erc721Token.withdrawExit(hash);
    const txHash = await result.getTransactionHash();
    console.log("txHash", txHash);
    const receipt = await result.getReceipt();
    console.log("receipt", receipt);

  } else if (type == "erc20") {
    const erc20Token = client.erc20(pos.parent.erc20, true);

    const result = await erc20Token.withdrawExit(hash);

    const txHash = await result.getTransactionHash();
    console.log("txHash", txHash);
    const receipt = await result.getReceipt();
    console.log("receipt", receipt);

  } else if (type == "erc1155") {
    const erc1155Token = client.erc1155(pos.parent.erc1155, true);

    const result = await erc1155Token.withdrawExit(hash);
    const txHash = await result.getTransactionHash();
    console.log("txHash", txHash);
    const receipt = await result.getReceipt();
    console.log("receipt", receipt);
  }else{
    console.log("Invalid type of standard ")
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
