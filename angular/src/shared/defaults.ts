import { Account } from './interfaces';
import { AR } from './networks';
const { v4: uuidv4 } = require('uuid');

export class Defaults {
  static getNetworks() {
    const networks = [];
    networks.push(new AR());
    return networks;
  }

  static getDefaultAccounts(instance: string) {
    let accounts: Account[] = [];

    switch (instance) {
      case 'blockcore':
        accounts = [
          {
            identifier: uuidv4(),
            index: 0,
            networkType: 'AR',
            mode: 'normal',
            selected: false,
            name: 'AR Coin',
            type: 'coin',
            network: 55555,
            purpose: 44,
            purposeAddress: 44,
            icon: 'paid',
          }
        ];
        break;
    }

    return accounts;
  }
}
