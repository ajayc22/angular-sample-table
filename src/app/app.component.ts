import { Component } from '@angular/core';
import { RestServiceService } from './rest-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  private data: any[];

  public constructor(private restService: RestServiceService) {
    restService.get().subscribe((dt) => {
      this.data = dt;
    });
  }
}
