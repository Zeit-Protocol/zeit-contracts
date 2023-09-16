const hre = require("hardhat");
const { VAULT_ADDRESS } = require("../../constants/constants");

const vaultAddress = VAULT_ADDRESS;

async function main() {
  const contract = await hre.ethers.deployContract("USDG", [vaultAddress]);
  console.log("Deploying contract to Tenet....");
  await contract.waitForDeployment();

  console.log(`USDG deployed to: \nAddress: ${contract.target}`);
}
main();
