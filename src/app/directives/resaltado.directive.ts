import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private ele:ElementRef ) {
    // console.log('directiva llamada');
    // ele.nativeElement.style.backgroundColor = '#faac58';
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar( this.nuevoColor || '#fff000');
    // console.log(this.nuevoColor);
    // this.ele.nativeElement.style.backgroundColor = '#fff000';
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar( null );
    // this.ele.nativeElement.style.backgroundColor = '#f2f5a9';
  }

  private resaltar( color:string) {
    this.ele.nativeElement.style.backgroundColor = color;

  }

}
