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

  randomComputer(max: number) {
    return Math.floor(Math.random() * max);
  }

  compSelection() {
    this.compResult = this.randomComputer(3);
  }

  userSelection(userData: number) {
    this.compSelection();

    console.log('C - ' + this.compResult);
    console.log('U - ' + userData);


    if (this.compResult === userData) {

      console.log('try again');

    } else if ((this.compResult - userData) === -1 || (this.compResult - userData) === 2) {
      console.log('USER - winner');
    } else {
      console.log('COMPUTER - winner')
    }

    // if (this.compResult === userData) {
    //   console.log('try again')
    // } else if (this.compResult > userData){
    //
    // } else if (this.compResult < userData){
    //
    // }

  }
  //
  // calculateResult(a: number, b: number) {
  //   return Math.abs(a-b)
  // }

  translateResult(data: number) {
    switch (data) {
      case 0:
        this.compResult = 'ROCK';
        break;

      case 1:
        this.compResult = 'SCISSORS';
        break;

      case 2:
        this.compResult = 'PAPER';
        break;

      default:
        this.compResult = 'select needed';
        break;
    }
  }



}
