const hre = require("hardhat");
const { VAULT_ADDRESS } = require("../../constants/constants");

async function main() {
  const contract = await hre.ethers.deployContract("VaultUtils", [
    VAULT_ADDRESS,
  ]);
  console.log("Deploying contract to Tenet....");
  await contract.waitForDeployment();

  console.log(`VaultUtils deployed to: \nAddress: ${contract.target}`);
}
main();
