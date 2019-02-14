import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgorundColor = this.highLightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgorundColor = this.defaulColor;
  }

  //usar um seletor pode ser uma classe css, id, definição de estilo ou outra coisa
  @HostBinding('style.backgroundColor') backgorundColor: string;

  @Input() defaulColor: string = 'white';
  @Input('highlight') highLightColor: string = 'yellow';
  
  constructor() { }

  ngOnInit(){
    this.backgorundColor = this.defaulColor;
  }
}
