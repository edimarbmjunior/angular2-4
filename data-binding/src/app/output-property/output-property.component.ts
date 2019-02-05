import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  //receber valor do pai
  @Input() valor: number = 0;

  //Exportar o valor
  @Output() mudouValor = new  EventEmitter();

  @ViewChild('campoInput') campoVAlorInput: ElementRef;

  incrementa(){
    //console.log('campoInput:>', this.campoVAlorInput.nativeElement.value);
    this.campoVAlorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
