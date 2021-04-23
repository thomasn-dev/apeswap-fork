const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
	let weth;
	const FACTORY_ADDRESS = '0x94058DCE1B5710C09E1D37f030A5CE1698bbDaA4';

	if (network === 'mainnet') {
		weth = await WETH.at('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2h');
	} else {
    await deployer.deploy(WETH);
		weth = await WETH.deployed();
	}

	await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};

