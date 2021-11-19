import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../services/apirest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage {
  //TODAS LAS INYECCCIONES SE HACEN EN EL CONSTRUCTOR
  data;
  usuario:any;
  constructor(private activatedRoute: ActivatedRoute, private api: ApirestService) { }
  //console.log(this.data) 
  ionViewDidEnter(): void {
    this.data = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.obtieneUsuariosId(this.data).subscribe(resp => { this.usuario = resp });
    console.log(this.usuario);


  }

}
