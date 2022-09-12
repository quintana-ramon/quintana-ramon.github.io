import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent implements OnInit {
  interests: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let interest1 = 'Physics';
    let interest2 = 'Philanthropy';
    let interest3 = 'Alternative energy sources';
    let interest4 = 'Reading';
    let interest5 = 'AI';
    let interest6 = 'Robotic';

    this.interests.push(
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6
    );
  }
}
