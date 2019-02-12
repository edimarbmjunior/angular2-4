import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
              private  _renderer: Renderer) {
    //console.log('_elementRef:>', this._elementRef);
    //Tomar cuidado pois ao usar a codificação abaixo pode ficar vuneravel a atauqes por exemplo, css (Cross-site scripting).
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    //Ao inves de usar a codificação acima podemos usar o renderer
    this._renderer.setElementStyle(_elementRef.nativeElement, 'background-color', 'yellow');
  }

}
