import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RockScissorsPaperComponent } from './rock-scissors-paper/rock-scissors-paper.component';
import { NewGameComponent } from './rock-scissors-paper/new-game/new-game.component';
import { CardSelectionComponent } from './rock-scissors-paper/card-selection/card-selection.component';
import { PlayerResultComponent } from './rock-scissors-paper/player-result/player-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { DirectivesComponent } from './directives/directives.component';
import { ReversePipe } from './directives/reverse.pipe';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { NumbersDirective } from './directives/numbers.directive';


@NgModule({
  declarations: [
    AppComponent,
    RockScissorsPaperComponent,
    NewGameComponent,
    CardSelectionComponent,
    PlayerResultComponent,
    DirectivesComponent,
    ReversePipe,
    NumbersDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
