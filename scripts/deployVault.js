const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("Vault", []);
  console.log("Deploying contract to Tenet....");
  await contract.waitForDeployment();

  console.log(`Vault contract deployed to: \nAddress: ${contract.target}`);
}
main();
