const networkConfig = {
    31337: {
        name: "localhost",
    },
    4: {
        name: "rinkeby",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
    137: {
        name: "polygon",
        ethUsdPriceFeed: "0x67935f65D1577ced9f4929D3679A157E95C1c02c",
    },
}

const developmentChains = ["hardhat", "localhost"]
module.exports = {
    networkConfig,
    developmentChains,
}
