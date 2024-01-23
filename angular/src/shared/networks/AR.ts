import { Network } from './network';

export class AR implements Network {
    id = 'AR';
    name = 'ARCOIN';
    symbol = 'AR';
    network = 55555;
    purpose = 44;
    messagePrefix = '\x18Bitcoin Signed Message:\n';
    bech32 = 'ar';
    bip32 = {
        public: 0x0488b21e,
        private: 0x0488ade4,
    };
    pubKeyHash = 5;
    scriptHash = 110;
    wif = 0x08;
    minimumFeeRate = 10;
    maximumFeeRate = 5000;
    testnet = false;
    isProofOfStake = true;
    smartContractSupport = false;
    type = 'coin';
}
