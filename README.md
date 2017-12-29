# Aida ICO Contract

![Aida Token](images/logo.png)	

Please see below description of [Aida ICO][aidamarket] smart contract developed by [Phenom.Team][phenom].
This is a first ever contract based upon the new concept outlined by Vitalik Buterin when investors can revoke their deposits before the end of the ICO

## Overview
AID Token smart-contract is structured upon [ERC20 standard](erc20). 
One of distinctive features of the smart-contract is the fact that token price is fixed and pegged to USD instead of ETH which protects investors from volatility risks of ETH currency. This technical feature is made possible by usage of Oracle that updates ETH/USD actual exchange rate in the smart contract every 30 minutes. The token price is set to $0.25 apiece.

Ethereum is not the only currency investors can use when investing, they can also opt to purchase AID tokens with BTC, LTC, BCC and even USD (in debit cards). Processing of transactions in these currencies is enabled by automated platform, which processes every single incoming transaction and calculates it's USD equivalent. It also tracks number of confirmations of every single transaction and emits tokens to Ethereum address of an investor, he specified in his personal profile web page. Emission itself is processed by bringing up of buyForInvestor method directly from cotroller-addresses (controllersOnly). In order to ensure smooth real-time emission of AID tokens, a unique sharding technology developed by  [Phenom.Team][phenom] is used. The basics of the technology boils down to the procedure wherein the whole emission process is distributed among three controller-addresses, which allows to perform fast real-time token emission  even when the whole Ethereum network is overloaded.

AidaIco is the first smart-contract which is structured and based upon the concept outlined by Vitalik Buterin when investors can revoke their deposits:

-	For ETH investments: all tokens stashed on investor’s address get burned and invested ETH forwared back to investor’s wallet from AidaIco smart-contract.
-	BTC, LTC, BCC investments: refund process sf powered by Oracle. The investment amount get refunded back to investor’s wallet, minus transaction fee.
-	Withdrawal lock  – during the main stage of the ICO refund is possible only till 30th January 2018, inclusive. 

## The Crowdsale Specification
*	AID token is ERC-20 compliant.
*   Allocation of AID tokens goes in the following way:
	* Bounty 1%
	* Partners 3%
	* Team 20%
	* Public ICO 76%

  
## Code

#### AidaICO Functions

**Fallback function**
```cs
function() external payable
```
Fallback function calls createTokensForEth(address _investor, uint256 _aidValue) function to create tokens when investor sends ETH directly to ICO smart contract address.

**setRate**
```cs
function setRate(uint256 _RateEth) external oracleOnly
```
Set ETH/USD exchange rate and update token price.

**startPreIco**
```cs
function startPreIco() external managerOnly
```
Set ICO status to PreIcoStarted.

**pausePreIco**
```cs
function pausePreIco() external managerOnly
```
Set Ico status to PreIcoPaused.

**finishPreIco**
```cs
function finishPreIco() external managerOnly
```
Set ICO status to PreIcoFinished.

**startIco**
```cs
function startIco() external managerOnly
```
Set ICO status to IcoStarted.

**pauseIco**
```cs
function startIco() external managerOnly
```
Set ICO status to IcoPaused.

**finishIco**
```cs
function finishIco() external managerOnly
```
Finish ICO and allocate tokens for bounty company, partners and team pools.

**enableTokensTransfer**
```cs
function enableTokensTransfer() external managerOnly
```
Unfreezes tokens (enable token transfers).

**rememberEther**
```cs
function rememberEther(uint256 _value, address _investor) internal
```
Stores amount invested from specific address.

**rememberTokensEth**
```cs
function rememberTokensEth(uint256 _value, address _investor) internal
```
Stores amount of AID tokens investor received (for ETH purchases).

**rememberTokensOtherCrypto**
```cs
function rememberTokensOtherCrypto(uint256 _value, address _investor) internal
```
Stores amount of AID tokens investor received (for purchases in BTC, LTC, BCC).

**buyForInvestor**
```cs
function buyForInvestor(address _investor,uint256 _aidValue,string _txHash) external controllersOnly
```
buyForInvestor function is called by one of controllers createTokensForOtherCrypto(address _investor, uint256 _aidValue) function to allocate tokens to investors who make a deposit in non-ETH currencies.

**createTokensForOtherCrypto**
```cs
function createTokensForOtherCrypto(address _investor, uint256 _aidValue) internal
```
Issue tokens for investors who paid in other cryptocurrencies.

**createTokensForEth**
```cs
function createTokensForEth(address _investor, uint256 _aidValue) internal
```
Issue tokens for investors who paid in ETH.

**getBonus**
```cs
function getBonus(uint256 _value) public constant returns(uint256)
```
get current bonus

**daysFromIcoStart**
```cs
function daysFromIcoStart() public constant returns(uint256)
```
Count days from Ico start day.

**returnEther**
```cs
function returnEther() public
```
Allows investors to return their investments(in ETH) if preICO or ICO_RETURN_DURATION is not over yet and burns tokens.


**returnOtherCrypto**
```cs
function returnOtherCrypto(address _investor, string _logString) external refundManagerOnly
```
This method is called by refund manager to burn tokens of investors who want to revoke their investments in other cryptocurrencies.

**withdrawEther**
```cs
function withdrawEther(uint256 _value) external managerOnly
```
Allows Company withdrawing investments when ICO_RETURN_DURATION is over

#### AidaIco Events

**LogStartICO**
```cs
event LogStartICO();
```
**LogPauseICO**
```cs
event LogPauseICO();
```

**LogFinishICO**
```cs
event LogFinishICO(address bountyFund, address partnersFund, address teamFund);
```

**LogBuyForInvestor**
```cs
event LogBuyForInvestor(address investor, uint256 aidValue, string txHash);
```
**LogReturnEth**
```cs
event LogReturnEth(address investor, uint256 eth);
```
**LogReturnOtherCrypto**
```cs
event LogReturnOtherCrypto(address investor, string logString);
```

## Prerequisites
1. nodejs, and make sure it's version above 8.0.0
2. npm
3. truffle
4. testrpc

## Run tests
1. run `testrpc` in terminal
2. run `truffle test` in another terminal to execute tests.


## Collaborators

* **[Alex Smirnov](https://github.com/AlekseiSmirnov)**
* **[Max Petriev](https://github.com/maxpetriev)**
* **[Dmitriy Pukhov](https://github.com/puhoshville)**
* **[Kate Krishtopa](https://github.com/Krishtopa)**


[aidamarket]: http://ico.aida.market/index-en.php
[phenom]: https://phenom.team/
[erc20]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
