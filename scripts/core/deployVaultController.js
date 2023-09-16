const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("VaultErrorController", []);
  console.log("Deploying contract to Tenet....");
  await contract.waitForDeployment();

  console.log(
    `VaultErrorController contract deployed to: \nAddress: ${contract.target}`
  );
}
main();
