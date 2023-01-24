import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './home-presentation.component.html'
})
export class HomePresentationComponent implements OnInit {

  public markText: string;

  constructor() {
    this.markText = 'Bookmark'
  }

  public pledgeDetails = [
    {
      id:1,
      title:"Bamboo Stand",
      amount:25,
      content:`You get an ergonomic stand made of natural bamboo. You've helped us lauch our promotional
      campaign, and you'll be added to a special Backer member list.`,
      left:0
    },
    {
      id:2,
      title:"Black Edition Stand",
      amount:75,
      content:`You get a Black Special Edition computer stand and a personal thank you. You'll be added to our
      Backer member list. Shipping is included.`,
      left:100
    },
    {
      id:3,
      title:"Mahogany Special Stand",
      amount:200,
      content:`You get two Special Mahogany stands, a Backer T-shirt, and a personal thank you. You'll be added
      to our Backer member list. Shipping is included.`,
      left:100
    }
  ]

  ngOnInit(): void {
  }

  public onBookmark() {
    this.markText === 'Bookmark' ? this.markText = 'Bookmarked' : this.markText = 'Bookmark'
  }
}
