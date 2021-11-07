import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';

  public btnStart: string = '';

  gameButton(): any {
    return this.btnStart = 'button-started';
  }
}
