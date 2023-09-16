require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    testnet: {
      url: "https://rpc.testnet.tenet.org",
      chainId: 155,
      accounts: [process.env.PRIVATE],
    },
    //tenet mainnet
    mainnet: {
      url: "https://rpc.tenet.org",
      chainId: 1559,
      accounts: [process.env.PRIVATE],
      allowUnlimitedContractSize: true,
    },
  },
  etherscan: {
    apiKey: {
      tenet: process.env.TENET_API,
    },
    customChains: [
      {
        network: "tenet",
        chainId: 155,
        urls: {
          apiURL: process.env.TENET_API,
          browserURL: "https://testnet.tenetscan.io/",
        },
      },
    ],
  },

  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
      },
    },
  },
};
