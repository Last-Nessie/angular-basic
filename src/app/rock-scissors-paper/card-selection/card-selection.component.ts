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
  public userCard: string = '';
  public compCard: string = '';

  public userImg: string = 'https://avatanplus.com/files/resources/original/5759b69c2046c155367151e4.png';
  public compImg: string = 'https://avatanplus.com/files/resources/original/5759b69c2046c155367151e4.png';
  public rockImg: string = 'https://media.istockphoto.com/photos/stone-isolated-on-white-background-clipping-path-picture-id1159927163?k=20&m=1159927163&s=612x612&w=0&h=-CA9O_r3rCywREj1jsttN13FI3ajRexIuvfDB6gGHpA=';
  public scissorsImg: string = 'https://media.istockphoto.com/photos/open-scissors-picture-id1168085197?k=20&m=1168085197&s=170667a&w=0&h=DugvKFmsDKfDojYwWHg_OftS4s9fVk8qVfC4rc0ygfY=';
  public paperImg: string = 'https://pma-physicians.com/wp-content/uploads/2021/01/paper_111691001.jpg';

  compSelection() {
    return this.compResult = Math.floor(Math.random() * 3);
  }

  userSelection(userData: number) {
    this.compSelection();
    this.getResult(userData, this.compResult);
  }

  getResult(user: number, comp: number) {

    this.userImg = this.translateResult(user);
    this.compImg = this.translateResult(comp);

    if (comp === user) {
      this.userCard = this.compCard = 'draw';

    } else if ((user - comp) === (-1 || 2)) {
      this.userCard = 'winner';
      this.compCard = 'loser';

    } else {
      this.compCard = 'winner';
      this.userCard = 'loser';
    }

  }

  translateResult(data: number) {
    switch (data) {
      case 0:
        return this.rockImg;

      case 1:
        return this.scissorsImg;

      case 2:
        return this.paperImg;

      default:
        return 'select needed';
    }
  }



}
