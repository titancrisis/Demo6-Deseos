import { Component } from '@angular/core';
import { Lista } from '../../models';
import { DeseosService } from '../../services/deseos.services';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.page.html'
})
export class TerminadosPage {
    listas: Lista[];

    constructor(public deseosService: DeseosService) {
        // Inicia la lista.
        this.listas = deseosService.listas;
    }

    listaSeleccionada(lista: Lista) {
        console.log(lista);

    }
}