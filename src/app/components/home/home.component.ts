import { 
  Component, 
  OnInit, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="border-bottom mt-3">
      <app-ng-style></app-ng-style>
    </div>
    
    <div class="border-bottom mt-3">
      <app-css></app-css>
    </div>
    
    <div class="border-bottom mt-3">
      <p>
        Hola mundo desde app.component
      </p>
    </div>
    
    <div class="border-bottom mt-3 p-2">
      <app-clases></app-clases>
    </div>
    
    <div class="border-bottom mt-3">
      <p [appResaltado]="'#0b610b'">
        Directivas personalizadas
      </p>
    </div>

    <div class="border-bottom mt-3">
      <app-ng-switch></app-ng-switch>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
