const MNEMONIC="appear stomach artist ancient order chronic judge close arch sick example oxygen"
const INFURA_API_KEY="f17a5def5c714e0fbde03f3bc4dd3592"
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: "8545",
      network_id: "*" // match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4,
      gas: 4700000
    },
    kovan: {
      provider: new HDWalletProvider(MNEMONIC, "https://kovan.infura.io/v3/"+INFURA_API_KEY),
      network_id: 42
    },
  }
};
