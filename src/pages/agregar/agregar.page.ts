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

        if (this.navParams.get('lista')) {
            this.lista = this.navParams.get('lista');
        } else {
            this.lista = new Lista(titulo);
            this.deseosService.agregarLista(this.lista);
        }
    }

    agregarItem() {

        console.log(this.nombreItem);

        if (this.nombreItem.length === 0) {
            return;
        }
        this.lista.items.push(new ListaItem(this.nombreItem));
        this.deseosService.guardarStorage();
        this.nombreItem = '';
    }

    actualizarTarea(item: ListaItem) {
        item.completado = !item.completado;

        const pendientes = this.lista.items.filter(itemData => {
            return !item.completado;
        }).length;

        if (pendientes === 0) {
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        } else {
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }
        console.log(pendientes);
        this.deseosService.guardarStorage();
    }

    borrar(index: number) {
        this.lista.items.splice(index, 1);
        this.deseosService.guardarStorage();
    }
}