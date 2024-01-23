import { Component, Inject, HostBinding, ChangeDetectorRef, ApplicationRef, NgZone, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptoService, UIState, NetworksService, AppManager, WalletManager } from '../../services';
import { Router } from '@angular/router';
import { ActionService } from 'src/app/services/action.service';
// import * as browser from 'webextension-polyfill';
import { ActionMessage, Permission } from 'src/shared';
import { PermissionStore } from 'src/shared/store/permission-store';
import { Actions, PERMISSIONS } from 'src/app/shared/constants';
const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-action-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css'],
})
export class ActionWalletsComponent {
  constructor(
    public uiState: UIState,
    private permissionStore: PermissionStore,
    public actionService: ActionService,
    public networkService: NetworksService,
    public walletManager: WalletManager,
    private manager: AppManager,
    private cd: ChangeDetectorRef
  ) {
    this.actionService.status.title = 'Connect with App';
    this.actionService.status.description = `Select the wallet to use on this site`;
    this.actionService.consentType = 'connect';
    this.actionService.permissionLevel = 'wallet';
  }
}
