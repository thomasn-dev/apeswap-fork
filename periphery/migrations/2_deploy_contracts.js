const Router = artifacts.require("ApeRouter.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
	let weth;

	const FACTORY_ADDRESS = '0x006031e2eFbBE9764A9276Dd0436d138FB4ac3B3';

	if (network === 'mainnet') {
		weth = await WETH.at('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2h');
	} else {
    await deployer.deploy(WETH);
		weth = await WETH.deployed();
	}

	await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
