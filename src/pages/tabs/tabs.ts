import { Component } from '@angular/core';

import { PendientePage } from '../pendientes/pendientes.page';
import { TerminadosPage } from '../terminados/terminados.page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientePage;
  tab2Root = TerminadosPage;

  constructor() {

  }
}
