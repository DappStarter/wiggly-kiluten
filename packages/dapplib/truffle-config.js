require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name remember pizza modify inner clock metal gasp'; 
let testAccounts = [
"0x1330421db4237570aae1ee9ca43620fdc43a33381aa22e7813bf82d4985095e7",
"0x878337bf52f53fa5def6900a649b99d9f3241e724538b4eb6b9df5c9eb4f913f",
"0x33b708afcdb4a32f3e18649af7bcc905765f09df6c10edbc160760e9bc23d0ab",
"0xe22f839df3dcde78875c4c284e08d13e5cc2c198861298fbc325071253cb3579",
"0x57c53b068097f4b2c0067e7e3e1bf5e48d420f6250efd8df63d5377cc42c2fce",
"0x8b2be60419e6abb361c9db932280241d2e4803ba14d17479312d025f91130c9c",
"0xee0eb9dc7b325097a97290450ef9df78928673463d71edfae589e6a9e5ce7d6b",
"0x3d26121196d49a172a922e2dcfda34fba1f3f6d966bd11ecddfbdd88d1c85668",
"0xb853d154f620017aba219f4b98e4599a34ec0871726b0915a02eca981c80ecb1",
"0xa5e57fa9a93be56e7d062909f6711a0627bdf8f02755a6ab36cdbae356b62e98"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
