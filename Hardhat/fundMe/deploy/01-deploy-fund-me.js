const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployment }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // const ethUsdPriceFeedAddress = networkConfig[chianId]["etherUsdPriceFeed"]
    let ethUsdPriceFeedAddresss
    if (developmentChains.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddresss = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddresss = networkConfig[chainId]["ethUsdPriceFeed"]
    }

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddresss],
        log: true,
    })
}

module.exports.tags = ["all", "fundme"]
