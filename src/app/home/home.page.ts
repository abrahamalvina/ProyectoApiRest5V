import { Component } from '@angular/core';
import { ApirestService } from '../services/apirest.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listadoUsuarios=[];
  constructor(private api:ApirestService) {}

  listar() 
  {
    this.api.obtieneUsuarios();
    this.listadoUsuarios = this.api.listado;
  }

}
