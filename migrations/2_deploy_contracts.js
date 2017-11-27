var XmasCoin = artifacts.require("./XmasCoin.sol");


module.exports = function(deployer) {
  deployer.deploy(XmasCoin);
};
