import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RockScissorsPaperComponent } from './rock-scissors-paper/rock-scissors-paper.component';
import { NewGameComponent } from './rock-scissors-paper/new-game/new-game.component';
import { CardSelectionComponent } from './rock-scissors-paper/card-selection/card-selection.component';
import { PlayerResultComponent } from './rock-scissors-paper/player-result/player-result.component';

@NgModule({
  declarations: [
    AppComponent,
    RockScissorsPaperComponent,
    NewGameComponent,
    CardSelectionComponent,
    PlayerResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
