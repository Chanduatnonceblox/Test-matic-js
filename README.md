Overview
This is Test script for testing the matic js bridge functionaltiy with deposit ,withdrawal, The code snippet have config file with token contracts. please upadate the config if you have other token address. 

Prerequisites
Ensure you have the following prerequisites installed before running the script:

Node.js: Make sure Node.js is installed on your system.
Configuration: Ensure that the required configuration files (config.js) and utility functions (utils.js) are present in the appropriate directories.
Usage
Open a terminal window.

Navigate to the directory containing the script.

Run the following command:

bash

node script.js // name of script
Follow the prompts to provide the necessary information:

Enter the token type (ERC721, ERC20, ERC1155, or "check" for checkpoint verification).
Enter the burn transaction hash.
The script will process the information and display the transaction hash .

Token Types
ERC721
For ERC721 tokens, the script interacts with the POS system using the provided ERC721 contract address.

ERC20
For ERC20 tokens, the script interacts with the POS system using the provided ERC20 contract address.

ERC1155
For ERC1155 tokens, the script interacts with the POS system using the provided ERC1155 contract address.

Checkpoint Verification
If the token type is set to "check," the script will verify if the specified transaction hash has been checkpointed.

Deposit
To deposit funds from the Ethereum, follow these steps:
Step 1: Run the script by executing the following command in a terminal window: 
node deposit.js 
Step 2: Enter the token type (ERC721, ERC20, ERC1155, or "check" for checkpoint verification).
Step 3: Enter the amount or tokenID  that you want to deposit.
wait for 30 minutes to get the assets on POS.


Withdrawal 
To withdraw funds from the POS system, follow these steps:
Step 1: Run the script by executing the following command in a terminal window: 
node withraw_start.js 
Step 2: Enter the token type (ERC721, ERC20, ERC1155, or "check" for checkpoint verification).
Step 3: Enter the amount or tokenID  that you want to withdraw.

Wait for checkpointing the burn transaction.
Step 4: Run the script by executing the following command in a terminal window: 
node withraw_exit.js 
Step 5: Enter the token type (ERC721, ERC20, ERC1155, or "check" for checkpoint verification).
Step 6: Enter the burn transaction hash.
Once the transacion is complete the assets will unlocked at ethereum side.


Withdrawal faster 
To withdraw funds from the POS system faster, follow these steps:
Step 1: Update the script method withdrawExit to  withdrawExitFaster , rest is same no need to change.
Follow the same step of normal Withdrawal

Diffrence between withdrawExit and withdrawExitFaster.
The main diffrence is the withdraw exit get the payload from backend while the withdrawExit create payload in node module with provided RPC url


Error Handling
In case of any errors during execution, error details will be logged to the console.

Important Notes
Make sure to input valid information for the token type and burn transaction hash.
The script will exit after execution.
Feel free to modify the script based on your specific requirements or integrate it into a larger POS system as needed.
