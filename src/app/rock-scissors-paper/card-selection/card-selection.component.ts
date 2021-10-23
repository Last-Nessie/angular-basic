import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.scss']
})
export class CardSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public compResult: any;

  compSelection() {
    return this.compResult = Math.floor(Math.random() * 3);
  }

  userSelection(userData: number) {
    this.compSelection();

    console.log('Comp - ' + this.translateResult(this.compResult));
    console.log('User - ' + this.translateResult(userData));


    if (this.compResult === userData) {

      console.log('try again');

    } else if ((userData - this.compResult) === (-1 || 2)) {
      console.log('USER - winner');
    } else {
      console.log('COMPUTER - winner')
    }

  }


  translateResult(data: number) {
    switch (data) {
      case 0:
        return 'ROCK';
        break;

      case 1:
        return 'SCISSORS';
        break;

      case 2:
        return 'PAPER';
        break;

      default:
        return 'select needed';
        break;
    }
  }



}
