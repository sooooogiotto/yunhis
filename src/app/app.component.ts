import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private configService: ConfigService
  ) {
    configService.getToken();
  }
  title = 'yunhis';
}
