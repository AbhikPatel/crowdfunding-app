import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()

export class LandingService {

  public convertPledge:BehaviorSubject<any[]>
  constructor() { 
    this.convertPledge = new BehaviorSubject(this.pledge);
  }

  public pledge = [
    {
      id: 0,
      title: "Pledge with no reward",
      amount: 0,
      content: `Choose to support us without a reward if you simply believe in our project. As a backer, you
      will be signed up to receive product updates via email.`,
      left: 1,
      label:'nothing'
    },
    {
      id: 1,
      title: "Bamboo Stand",
      amount: 25,
      content: `You get an ergonomic stand made of natural bamboo. You've helped us lauch our promotional
      campaign, and you'll be added to a special Backer member list.`,
      left: 5,
      label:'bamboo'
    },
    {
      id: 2,
      title: "Black Edition Stand",
      amount: 75,
      content: `You get a Black Special Edition computer stand and a personal thank you. You'll be added to our
      Backer member list. Shipping is included.`,
      left: 5,
      label:'black'
    },
    {
      id: 3,
      title: "Mahogany Special Stand",
      amount: 200,
      content: `You get two Special Mahogany stands, a Backer T-shirt, and a personal thank you. You'll be added
      to our Backer member list. Shipping is included.`,
      left: 5,
      label:'mahogany'
    }
  ]
}
