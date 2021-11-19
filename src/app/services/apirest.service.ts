import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  
  private apiURL = 'https://jsonplaceholder.typicode.com';
  listado = []
  constructor(private http:HttpClient) { }

  obtieneUsuarios() 

  {
    let url = this.apiURL + 'users';
    this.listado = []
    return new Promise((resolve, reject) =>{
      this.http.get(url).subscribe((data: []) => {
        data.forEach(item => {this.listado.push(item);})
      },
      err => {
        console.log("Ocurrio un error");
      })
    })
  }
  
  getUsuarios():any {
    return this.http.get(`${this.apiURL}/users`)
  }

  obtieneUsuariosId(id:string) {
    const url = `${ this.apiURL }/users?id=${ id }`;
    return this.http.get(url);
  } 


  
}


/* Ejercicio: Crear nueva página dpnde se despieguen 
              todos los datos del usuario que se elija en la lista.
*/