var AidaICO = artifacts.require("AidaICO.sol");
var AIDA = artifacts.require("AidaToken.sol");

module.exports = function(deployer, network, accounts) {

    deployer.deploy(AidaICO, accounts[1], accounts[2], accounts[2], accounts[2], accounts[3], accounts[4], accounts[4], accounts[4], accounts[3], accounts[3]);

};
