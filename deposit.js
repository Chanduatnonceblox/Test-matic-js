const { pos } = require('./config');
const { getPOSClient, from } = require('./utils');

const execute = async () => {
  const client = await getPOSClient();
  const erc20Token = client.erc20(pos.parent.erc20, true);

  const result = await erc20Token.deposit(1, from);

  const txHash = await result.getTransactionHash();
  console.log("txHash", txHash);
  const receipt = await result.getReceipt();
  console.log("receipt", receipt);
// const erc1155RootToken = client.erc1155(pos.parent.erc1155, true);
// const balance = await erc1155RootToken.getBalance(from, 123);
// console.log("balance", balance);
// // const approveResult = await erc1155RootToken.approveAllForMintable();
// // const approveResult = await erc1155RootToken.approveAll();
// const result = await erc1155RootToken.deposit({
//     amount: 0.1,
//     tokenId: '123',
//     userAddress: from,
//     data: '0x', // data is optional
// });
// const erc721RootToken = client.erc721(pos.parent.erc721, true);
// const erc1155RootToken = client.erc1155(pos.parent.erc1155, true);

// const approveResult = await erc1155RootToken.approveAll();

// const txHashapprove = await approveResult.getTransactionHash();

// const txReceiptapprove = await approveResult.getReceipt();
// console.log("approve tx hash", txHashapprove)
// console.log("approve tx receipt", txReceiptapprove)
// const result = await erc721RootToken.depositMany([0,3], from);
// const result = await erc1155RootToken.deposit({
//   amount: 1,
//   tokenId: '123',
//   userAddress:from,
//   data: '0x', // data is optional
// });
// const txReceipt = await result.getReceipt();
//   const txHash = await result.getTransactionHash();
//   console.log(`txHash`, txHash);
//   console.log(`receipt`, txReceipt);
};
 



execute().then(() => {
}).catch(err => {
  console.error("err", err);
}).finally(_ => {
  process.exit(0);
})