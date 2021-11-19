import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../services/apirest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listadoUsuarios:any=[];
  constructor(private api:ApirestService) {}

  ionViewDidEnter(){
    this.api.getUsuarios().subscribe(users =>{console.log(users)
    this.listadoUsuarios = users
    })
  }

  // listar() 
  // {
  //   this.api.obtieneUsuarios();
  //   this.listadoUsuarios = this.api.listado;
  // }

}

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class GoDetalle implements OnInit{

//   constructor(private router: Router) { }

//   ngOnInit() {
//   }
//     goTodetalle()
//     {
//       this.router.navigate(['/detalle'])
//     }
// }