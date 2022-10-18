import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase()
  }

  obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`
  }

  cambiarNombre(): void {
    if (this.nombre == 'Spiderman') {
      this.nombre = 'Ironman'
    } else {
      this.nombre = 'Spiderman'
    }
  }
  cambiarEdad(): void {
    if (this.edad == 45) this.edad = 30
    else this.edad = 45
  }
}
