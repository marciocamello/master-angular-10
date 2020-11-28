import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServerComponent{
  serverId = 10;
  serverStatus = 'offline';
}
