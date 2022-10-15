// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

 import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FundMe {

    uint256 public minimumUsd = 50 * 1e18;

    function fund() public payable{
        require(getConversionRate(msg.value) >= minimumUsd, "Didn't send enough!"); // 1e18 == 1 * 10 ** 18
    }

    function getPrice() public view returns(uint256){
        // ABI 
        // Address 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
        AggregatorV3Interface priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
        (,int256 price,,,) = priceFeed.latestRoundData();
        // ETH in terms of USD
        // 1300.00000000
        return uint256(price * 1e10); // 1**10 == 10000000000
    }

    function getConversionRate(uint256 ethAmount) public view returns (uint256) {
        uint256 ethPrice = getPrice();
        // 1300_00000000000000000 = ETH / USD price
        // 1_0000000000000000000 ETH

        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
        return ethAmountInUsd;
    }

}