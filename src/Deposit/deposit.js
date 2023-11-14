const { getPOSClient, from ,pos} = require('../../utils');
const ps = require("prompt-sync");
const prompt = ps();
const execute = async () => {
  const client = await getPOSClient();
  const type = prompt(`Enter token Type: "example: erc721,ec20, erc1155" `);


  if (type == "erc721") {
    const tokenID = prompt(`Enter the  tokenId : `);
    

    const erc721Token = client.erc721(pos.parent.erc721, true);
    const approveResult = await erc721Token.approve(tokenID);
    if(approveResult !=undefined){
      const txHash = await approveResult.getTransactionHash();
      
      const txReceipt = await approveResult.getReceipt();
      console.log(txHash,txReceipt)
    }
    const result = await erc721Token.deposit(tokenID,from);
    const txHash = await result.getTransactionHash();
    console.log("txHash", txHash);
    const receipt = await result.getReceipt();
    console.log("receipt", receipt);

  } else if (type == "erc20") {
    const amount = prompt(`Enter the  amount : `);
    const erc20Token = client.erc20(pos.parent.erc20, true);

    const approveResult = await erc20Token.approve(amount);
  if(approveResult !=undefined){
    const txHash = await approveResult.getTransactionHash();
    
    const txReceipt = await approveResult.getReceipt();
    console.log(txHash,txReceipt)
  }
  const result = await erc20Token.deposit(amount,from);
    const txHash = await result.getTransactionHash();
    console.log("txHash", txHash);
    const receipt = await result.getReceipt();
    console.log("receipt", receipt);

  } else if (type == "erc1155") {
    const erc1155Token = client.erc1155(pos.parent.erc1155, true);
    const tokenID = prompt(`Enter the  tokenId : `);
    const amount = prompt(`Enter the  amount : `);
    const approveResult = await erc1155Token.approveAll();
    if(approveResult !=undefined){
      const txHash = await approveResult.getTransactionHash();
      
      const txReceipt = await approveResult.getReceipt();
      console.log(txHash,txReceipt)
    }
    const result = await erc1155Token.deposit(tokenID,amount,from,"0x");
    const txHash = await result.getTransactionHash();
    console.log("txHash", txHash);
    const receipt = await result.getReceipt();
    console.log("receipt", receipt);
  }else{
    console.log("Invalid type of standard ")
  }

}

execute().then(() => {
}).catch(err => {
  console.error("err", err);
}).finally(_ => {
  process.exit(0);
})