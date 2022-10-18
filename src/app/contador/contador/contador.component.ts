import { Component } from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
  <h3>La base es: <strong> {{base}} </strong></h3>
  <input id="base" type="text" placeholder="base"/>
  <button (click)="nuevaBase()">Renovar</button>
  <button (click)="acumular(-base)">-{{base}}</button>
  <span> {{ num }} </span>
  <button (click)="acumular(+base)">+{{base}}</button>
  `
})
export class ContadorComponent {
  public num: number = 0;

  public base: number = 5;

  acumular(valor: number) {
    this.num += valor;
  }
  nuevaBase() {
    const e= document.getElementById('base') as HTMLInputElement | null
    const t: string | null | undefined = e? e.value : '';

    if (t) {
      this.base = Number(t)
    }

  }
}
