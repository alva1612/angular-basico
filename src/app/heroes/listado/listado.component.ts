import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Saber', 'Emiya', 'Hercules']
  borrado: string = ''

  borrarHeroe() {
    console.log('borrando...')
    this.borrado = this.heroes.pop() || ''
    console.log(this.borrado)
  }
}
