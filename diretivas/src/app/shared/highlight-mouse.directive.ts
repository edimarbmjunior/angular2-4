import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgorundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgorundColor = 'white';
  }

  //usar um seletor pode ser uma classe css, id, definição de estilo ou outra coisa
  //@HostBinding('style.backgroundColor') backgorundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgorundColor;
  }
  private backgorundColor: string;

  constructor(//private _elementRef: ElementRef,
              //private _renderer: Renderer
            ) { }

}
