const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rink: {
      provider: () =>
        new HDWalletProvider(
          contractOwnerPrivateKey,
          "https://rinkeby.infura.io/v3/" + infuraKey
        ),
      network_id: "4",
      gas: 5000000,
      from: contractOwner
    }
  }
};
