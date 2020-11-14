require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rebel sister collect install battle equal gaze'; 
let testAccounts = [
"0x259ce87b4b8192f65d26ea3d13b4b78191676a12105e2197a33486eaaa46244a",
"0xd0640997cd8860a6b4c59596aaf7050e6c0b1bc7dd0fa8197fc24a08a452000b",
"0xfa53fcbc43249920183b4c43b844c36da6efc7aa6fe39bc3cf9fd0bb4b068232",
"0xd502fe9ba304d3f0bdd03f35a1a91c8374af369ffe348114cf4a9c0f984b0ef3",
"0x1862d6381929b665b3e51ee02cd8bebdb12631c0a4204ea9a63ce41366096fc7",
"0xa01b24801c96dfb055047d56d4f3ca9713b8fdc1db0d0da1f161da3962f9e340",
"0xfd210be33ba91d8c8182269e5bb3d45267845395ff2df48d22c2fa45edb680b0",
"0x886cfd49c251e45d286ae2f34b579366f827d924afb25b80beae53d6af6f3bf7",
"0x3fca875d700fc0d8d2333decc86ed8b369adc9139746cf2207ba4d8cbd3073c5",
"0xfd59f12dac0b42805f7b6e9c10d981195359eeef744d51f7aa0664a3da5cb01b"
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
