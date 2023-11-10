const { pos } = require('./config');
const { getPOSClient, from } = require('./utils');

const execute = async () => {
  const client = await getPOSClient();
  const erc20Token = client.erc20(pos.child.erc20);

  const result = await erc20Token.withdrawStart(1);

  // const txHash = await result.getTransactionHash();
  // console.log("txHash", txHash);
  // const receipt = await result.getReceipt();
  // console.log("receipt", receipt);
  // const erc721Token = client.erc721(pos.child.erc721);
  // const erc1155Token = client.erc1155(pos.child.erc1155);


  // const result = await erc721Token.withdrawStart(0);
  // const result = await erc1155Token.withdrawStart(123,1);

  // const result = await erc721Token.withdrawStartMany([0,3]);
  
  const txHash = await result.getTransactionHash();
  console.log("txHash", txHash);
  const receipt = await result.getReceipt();
  console.log("receipt", receipt);
}
execute().then(() => {
}).catch(err => {
  console.error("err", err);
}).finally(_ => {
  process.exit(0);
})