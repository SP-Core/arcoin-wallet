import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventBus, NetworkStatus, NetworkStatusEntry, NetworkStatusStore } from 'src/shared';
import { StateStore } from 'src/shared/store/state-store';
import { UIState, FeatureService, NetworkStatusService, StateService, LoggingMonitor, LoggerService } from '../../services';

@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html',
  styleUrls: ['./debugger.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DebuggerComponent implements OnDestroy, OnInit {
  networks: NetworkStatusEntry[];
  sub: any;
  updating = false;
  level: any;

  constructor(
    public logMonitor: LoggingMonitor,
    private events: EventBus,
    public uiState: UIState,
    public location: Location,
    private stateService: StateService,
    private stateStore: StateStore,
    public networkStatus: NetworkStatusService,
    public feature: FeatureService,
    public translate: TranslateService,
    private logger: LoggerService
  ) {
    this.uiState.title = 'Logs';
    this.uiState.showBackButton = true;
    this.uiState.goBackHome = false;
  }

  async ngOnInit() {
    this.uiState.title = await this.translate.get('Settings.Logs').toPromise();
    this.level = this.logger.currentLevel();
  }

  ngOnDestroy() {}

  cancel() {
    this.location.back();
  }

  async reset() {
    if (this.level < 2) {
      this.logger.disableDebug();
    } else {
      this.logger.enableDebug();
    }
    this. level = this.logger.currentLevel();
  }
}
