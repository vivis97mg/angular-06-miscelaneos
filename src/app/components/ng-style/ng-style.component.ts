import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es na etiqueta
    </p>

    <button class="btn btn primary mr-2 mb-3" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn primary mb-3" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `
})
export class NgStyleComponent implements OnInit {

  tamano:number = 20;

  constructor() { }

  ngOnInit() {
  }

}
