const hre = require("hardhat");
const {  BARN_ADDRESS } = process.env;


async function main() {
    const claim = await hre.ethers.getContractFactory('Barn');
    const barncontract = claim.attach(BARN_ADDRESS);
    console.log (await barncontract.claimManyFromBarnAndPack([5],true))
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
  });