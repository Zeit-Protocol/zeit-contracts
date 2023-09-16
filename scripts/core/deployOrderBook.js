const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("OrderBook", []);
  console.log("Deploying contract to Tenet....");
  await contract.waitForDeployment();

  console.log(`OrderBook deployed to: \nAddress: ${contract.target}`);
}
main();
