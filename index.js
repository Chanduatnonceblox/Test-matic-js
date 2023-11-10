const { pos } = require("./config");
const { getPOSClient, from } = require("./utils");

const execute = async () => {
  const client = await getPOSClient();
  const erc20Token = client.erc20(pos.parent.erc20, true);
  // const erc721Token = client.erc721(pos.parent.erc721, true);
  // const erc1155Token = client.erc1155(pos.parent.erc1155,true);



  const result = await erc20Token.withdrawExitFaster('0xa69d6b0727b00d664662be89f20b468d612b28694ebb4a78db3213ca076a9831')

  // const result = await erc721Token.withdrawExitFaster('0x4b6c70d89a3ad7397f7d0c5b430c46c1b2792cb01271d6975b6c1498f2fe2749');


  // const result = await erc1155Token.withdrawExitFaster('0xa48dc62b62c22712d062e84616066f3dd94ca3d1fc2b72ee87cfbead9a26d642',true);


  const txHash = await result.getTransactionHash();
  console.log("txHash", txHash);
  const receipt = await result.getReceipt();
  console.log("receipt", receipt);



  // For withdraw Multiple assets 
  
//   const payloads = await client.exitUtil.buildMultiplePayloadsForExit(
//     "0xfc9879994797595a27a63da432c172df26124331f75b4f14ca8c0b7d556842bb",
//     "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
//     true
// )

// for(let payload of payloads) {
//     const result = await client.rootChainManager.exit(payload)
//      const txHash = await result.getTransactionHash();
//   console.log("txHash", txHash);
//   const receipt = await result.getReceipt();
//   console.log("receipt", receipt);
// }


};
execute()
  .then(() => {})
  .catch((err) => {
    console.error("err", err);
  })
  .finally((_) => {
    process.exit(0);
  });
