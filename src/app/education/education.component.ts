import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let edu1 = {
      fechaInicio: '09/2012',
      fechaFin: '06/2015',
      certificado: 'Licenciado en Economia',
      colegio: 'Universidad de Pennsylvania',
    };
    let edu2 = {
      fechaInicio: '09/2015',
      fechaFin: '06/2018',
      certificado: 'Licenciado en Nothing',
      colegio: 'Universidad de Harvard',
    };

    this.education.push(edu1, edu2);
  }
}
