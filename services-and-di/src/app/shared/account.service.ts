import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {
  }

  addAccount(accountName: string, accountStatus: string) {
    this.accounts.push({name: accountName, status: accountStatus});
    this.loggingService.logStatusChange(accountStatus);
  }

  updateStatus(id: number, accountStatus: string) {
    this.accounts[id].status = accountStatus;
    this.loggingService.logStatusChange(accountStatus);
  }

}
