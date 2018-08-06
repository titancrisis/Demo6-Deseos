import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.page';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.page.html'
})
export class PendientePage {

    // listas: Lista[];

    constructor(private deseosService: DeseosService,
        private navCtrl: NavController,
        private alertCtrl: AlertController) {
        // Inicia la lista.
        // this.listas = deseosService.listas;
    }

    listaSeleccionada(lista: Lista) {

        this.navCtrl.push(AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
        // console.log(lista);
    }

    agregarLista() {

        const alerta = this.alertCtrl.create({
            title: 'Nueva Lista',
            message: 'Nombre de la nueva lista que desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Agregar',
                handler: data => {
                    if (data.titulo.length === 0) {
                        return;
                    }
                    // Envia los datos a la página agregar.
                    this.navCtrl.push(AgregarPage, {
                        titulo: data.titulo
                    });
                }
            }]
        });

        alerta.present();
    }

    borrarLista(lista: Lista) {
        // Borra un elemento de la lista.
        this.deseosService.borrarLista(lista);
    }
}