import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
  }

  // currentCount = 'counter';
  public startGameButton = '';



  startGame(): string {
    return this.startGameButton = 'game-started';
  }
}
