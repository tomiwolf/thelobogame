

Publishing process
Different network contract codes can be used in common, ETH, MATIC, FTM have been tested, but FTM's testnet did not find a place to view nft data, it is recommended to use MATIC

It is recommended to use the remix operation. After the release is successful, go to scan to verify the source code. Do not change the code during this period, otherwise it needs to be re-released.

First release two contracts, Traits and WOOL, without parameters

Then there is Woolf, which needs to pass WOOL_ADDRESS, TRAITS_ADDRESS, MAX_TOKENS (the maximum number of tokens supported)

Finally, Barn, the release needs to pass WOOLF_ADDRESS and WOOL_ADDRESS

Use script to upload Traits data to Traits contract, and update WOOLF_ADDRESS in Traits contract

Update BARN_ADDRESS in Woolf contract

Open the WOOL contract, find the add controller in the write contract, and enter BARN_ADDRESS

Operating procedures
Mint
Open the Woolf contract, find the mint in the write contract, enter the amount and total price of mint required, and whether you need to stake, click write to generate data. If you want to specify the wolf level, please enter 5-8 in the score column, otherwise enter 0 to generate it randomly

Claim
Open the Barn contract, find claimManyFromBarnAndPack in the write contract, enter the tokenID of the object to be harvested, choose whether to unstake, click write to get the corresponding Wool

metamask adds WOOL currency
Open the WOOL contract, find the approve in the write contract, enter the current login address and amount (no use is found for the time being), click write to obtain the corresponding authorization to display

View the corresponding pictures and properties
Open https://testnets.opensea.io/ and enter the Woolf contract address or log in to the account to view

Precautions for publishing front-end pages
Need to modify the woolf address and barn address in data.js

Need to modify SERVER_URL and API_KEY in main.js

For local testing, you need to run a node server first, either npm start or yarn start. The default port is 3000.

release
npx hardhat run scripts/deploy.js --network rinkeby

npx hardhat verify --network rinkeby contract address

Precautions
The woolf contract needs to be added to the woolf contract through addController, otherwise it is impossible to mint through woolf in the woolf contract

To mint wool in wool, you need to add the wallet address through addController, and then mint wool (note that 18 0s should be added)

Set it through setPaidTokens in the woolf contract. For example, if it is set to 2, it means that after mint2, you can use wool to mint