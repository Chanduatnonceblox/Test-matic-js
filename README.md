# Overview
This is Test script for testing the matic js bridge functionaltiy with deposit ,withdrawal, The code snippet have config file with token contracts. please upadate the config if you have other token address. 

# _Prerequisites_
Ensure you have the following prerequisites installed before running the script:

- Node.js: Make sure Node.js is installed on your system.
Configuration: Ensure that the required configuration files (config.js) and utility functions (utils.js) are present in the appropriate directories.
Usage
Open a terminal window.

- Navigate to the directory containing the script src.


## Token Types
### _ERC721_
For ERC721 tokens, the script interacts with the POS system using the provided ERC721 contract address.

### _ERC20_
For ERC20 tokens, the script interacts with the POS system using the provided ERC20 contract address.

### _ERC1155_
For ERC1155 tokens, the script interacts with the POS system using the provided ERC1155 contract address.

### _Checkpoint Verification_
If the token type is set to "check," the script will verify if the specified transaction hash has been checkpointed.

## Deposit  
To deposit funds from the Ethereum, follow these steps:
- Step 1: Run the script by executing the following command in a terminal window: 
```sh
node deposit.js 
```
- Step 2: Enter the token type (ERC721, ERC20, ERC1155, or "check" for checkpoint verification).
- Step 3: Enter the amount or tokenID  that you want to deposit.
- Wait for 30 minutes to get the assets on POS.


## Withdrawal
To withdraw funds from the POS system, follow these steps:
- Step 1: Run the script by executing the following command in a terminal window: 
```sh
node withraw_start.js
```
- Step 2: Enter the token type (ERC721, ERC20, ERC1155, or "check" for checkpoint verification).
- Step 3: Enter the amount or tokenID  that you want to withdraw.

- Wait for checkpointing the burn transaction.
- Step 4: Run the script by executing the following command in a terminal window: 
```sh 
node withraw_exit.js
```
- Step 5: Enter the token type (ERC721, ERC20, ERC1155, or "check" for checkpoint verification).
- Step 6: Enter the burn transaction hash.
- Once the transacion is complete the assets will unlocked at ethereum side.


## Withdrawal faster 
To withdraw funds from the POS system faster, follow these steps:
- Step 1: Update the script method withdrawExit to  withdrawExitFaster , rest is same no need to change.
- Follow the same step of normal Withdrawal

__Diffrence between withdrawExit and withdrawExitFaster.
The main diffrence is the withdraw exit get the payload from backend while the withdrawExit create payload in node module with provided RPC url__




## Error Handling
- In case of any errors during execution, error details will be logged to the console.
- The withdrawExit method throw error in some public RPC. To fix this try to use new RPC or use a dedecated RPC like infura,quick-node,alchemy etc


## _Important Notes_
Make sure to input valid information for the token type and burn transaction hash.
The script will exit after execution.



Feel free to modify the script based on your specific requirements or integrate it into a larger POS system as needed.
