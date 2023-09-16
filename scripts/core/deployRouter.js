const hre = require("hardhat");
const {
  VAULT_ADDRESS,
  WETH,
  USDG_ADDRESS,
} = require("../../constants/constants");

async function main() {
  const contract = await hre.ethers.deployContract("Router", [
    WETH,
    USDG_ADDRESS,
    VAULT_ADDRESS,
  ]);
  console.log("Deploying contract to Tenet....");
  await contract.waitForDeployment();

  console.log(`Router deployed to: \nAddress: ${contract.target}`);
}
main();
