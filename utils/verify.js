const { run } = require("hardhat")
const { modules } = require("web3")

async function verify(contractAddress, args) {
    console.log("Verifying contract....")

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().incldues("already verified")) {
            console.log("Already verified")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
