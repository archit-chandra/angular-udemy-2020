import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this approach won't work because it will not update itself if the component is already loaded.
    // it is not reactive. it will only work for the first time the component is loaded though.
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    // this makes reactive
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1';
      }
    );
    this.route.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
