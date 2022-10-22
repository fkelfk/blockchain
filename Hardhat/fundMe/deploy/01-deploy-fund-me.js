const { networkConfig } = require("../helper-hardhat-config")
const { network } = require("hardhat")
const helperConfig = require("../helper-hardhat-config")
const newworkConfig = helperConfig.networkConfig

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    let ethUsdPriceFeedAddresss
    if (chainId == 31337) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddresss = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddresss = networkConfig[chainId]["ethUsdPriceFeed"]
    }

    // const ethUsdPriceFeedAddresss = networkConfig[chainId]["ethUsdPriceFeed"]

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddresss],
        log: true
    })

    log("-------------------------------------------")
}

module.exports.tags = ["all", "fundme"]
