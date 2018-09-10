var DappToken = artifacts.require("./DappToken.sol");
var DappTokenSale = artifacts.require("./DappTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000).then(function(token) {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    console.log("*******token.address: "+token.address)
    return deployer.deploy(DappTokenSale, token.address, tokenPrice)
    .then(async (tokenSale)=>{
      console.log("*******TokenSale.address: "+tokenSale.address)
      token.transfer(tokenSale.address, 75000)
    })
  });
};
