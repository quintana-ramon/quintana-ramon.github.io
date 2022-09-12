import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
})
export class LanguagesComponent implements OnInit {
  languages: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let lan1 = 'English';
    let lan2 = 'Russian';

    this.languages.push(lan1);
    this.languages.push(lan2);
  }
}
