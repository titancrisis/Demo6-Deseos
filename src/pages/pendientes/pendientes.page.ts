import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista } from '../../models';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.page.html'
})
export class PendientePage {

    listas: Lista[];

    constructor(public deseosService: DeseosService) {
        // Inicia la lista.
        this.listas = deseosService.listas;
    }

    listaSeleccionada(lista: Lista) {
        console.log(lista);

    }
}