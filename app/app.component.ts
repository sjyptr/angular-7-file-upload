import { Component } from '@angular/core';
import { FileQueueObject } from './file-uploader.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 7 - Example file upload queue';

  onCompleteItem($event) {
    console.log($event);
  }
}
