# Phenom Team

Please see below developed by [Phenom.Team][phenom] smart contract for the [AIDA Market Crowdsale][aidamarket].

## Overview
One of distinctive features of the smart-contract is the fact that token price is fixed and pegged to USD instead of ETH which protects investors from volatility risks of ETH currency. This technical feature is made possible by usage of Oracle, a platform that brings up setRate every 30 minutes, which in turn transmits ETH/USD actual exchange rate of five top cryptocurrency exchanges as a parameter of the smart-contract. The token price is set to $0.25 apiece.

Ethereum is not the only currency investors can use when investing, they can also opt to purchase AID tokens with BTC, LTC, BCC and even USD (in debit cards). Processing of transactions in these currencies is enabled by automated platform, which processes every single incoming transaction in USD equivalent. It also tracks number of verifications of a single transaction and emits tokens headed to Ethereum address of an investor. Emission itself is processed by bringing up of buyForInvestor method directly from cotroller-addresses (controllersOnly). In order to ensure the real-time emission of AID tokens, a unique sharded  technology by  [Phenom.Team][phenom] is used. The basics of the technology boils down to the procedure wherein the whole emission process is distributed among three controller-addresses, which allows for real-time emission of tokens even when the whole Ethereum network is overloaded.

AidaIco is the first smart-contract which is structured and based upon the concept outlined by Vitalik Buterin:

-	For ETH investments: all tokens stashed on investor’s address get burned and forwared back to investor’s wallet from AidaIco smart-contract.
-	BTC, LTC, BCC investments: refund process if powered by Oracle. The investment amount get refunded back to investor’s wallet, minus transaction fee.
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
Fallback function calls createTokensForEth(address _investor, uint256 _aidValue) function to create tokens when investor sends ETH to address of ICO contract.

**getRate**
```cs
function setRate(uint256 _RateEth) external oracleOnly
```
Sets rate of ETH and update token price.

**startPreIco**
```cs
function startPreIco() external managerOnly
```
Sets ICO status to PreIcoStarted.

**pausePreIco**
```cs
function pausePreIco() external managerOnly
```
Sets Ico status to PreIcoPaused.

**finishPreIco**
```cs
function finishPreIco() external managerOnly
```
Sets ICO status to PreIcoFinished.

**startIco**
```cs
function startIco() external managerOnly
```
Sets ICO status to IcoStarted.

**pauseIco**
```cs
function startIco() external managerOnly
```
Sets ICO status to IcoPaused.

**finishIco**
```cs
function finishIco() external managerOnly
```
Finishes ICO and emit tokens for bounty company, partners and team.

**enableTokensTransfer**
```cs
function enableTokensTransfer() external managerOnly
```
Unfreezes tokens(enable token transfers).

**rememberEther**
```cs
function rememberEther(uint256 _value, address _investor) internal
```
Stores how many eth were invested by investor.

**rememberTokensEth**
```cs
function rememberTokensEth(uint256 _value, address _investor) internal
```
Stores how many tokens investor received(for purchases in ETH).

**rememberTokensOtherCrypto**
```cs
function rememberTokensOtherCrypto(uint256 _value, address _investor) internal
```
Stores how many tokens investor received(for purchases in other cryptocurrencies).

**buyForInvestor**
```cs
function buyForInvestor(address _investor,uint256 _aidValue,string _txHash) external controllersOnly
```
buyForInvestor function calls by one of controllers createTokensForOtherCrypto(address _investor, uint256 _aidValue) function to create tokens when investor made purchase in other cryptocurrencies.

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
Calculates bonus if PreIco sales still not over.

**daysFromIcoStart**
```cs
function daysFromIcoStart() public constant returns(uint256)
```
Counts days from Ico start day.

**returnEther**
```cs
function returnEther() public
```
Allows investors to return their investments(in ETH) if preICO or ICO_RETURN_DURATION is not over yet and burns tokens.


**returnOtherCrypto**
```cs
function returnOtherCrypto(address _investor, string _logString) external refundManagerOnly
```
This calls by refund manager to burn tokens of investors who returned their investments in other cryptocurrencies.

**withdrawEther**
```cs
function withdrawEther(uint256 _value) external managerOnly
```
Allows Company withdraw investments when ICO_RETURN_DURATION is over

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