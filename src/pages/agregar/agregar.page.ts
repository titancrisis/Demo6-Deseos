import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.page.html'
})
export class AgregarPage {

    lista: Lista;
    nombreItem: string = '';

    constructor(public deseosService: DeseosService,
        private navParams: NavParams) {

        // console.log(this.navParams);
        const titulo = this.navParams.get('titulo');
        this.lista = new Lista(titulo);

        this.deseosService.agregarLista(this.lista);
    }

    agregarItem() {

        console.log(this.nombreItem);

        if (this.nombreItem.length === 0) {
            return;
        }
        this.lista.items.push(new ListaItem(this.nombreItem));
        this.nombreItem = '';
    }

    actualizarTarea(item: ListaItem) {
        item.completado = !item.completado;
    }

    borrar(index: number) {
        this.lista.items.splice(index, 1);
    }
}