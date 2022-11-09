import { Component } from '@angular/core';
import { Usuarios } from '../models/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuariosArray: Usuarios[] = [
    {
      id: 1,
      nombre: "Betsy",
      apellido: "García",
      documento: "156324891",
      telefono: 1317632689,
      direccion: "cll 20",
      estado: "activo",
      fecha: ""
    },
    {
      id: 2,
      nombre: "Evelin",
      apellido: "Castañeda",
      documento: "1026130800",
      telefono: 1317632689,
      direccion: "cll 20",
      estado: "activo",
      fecha: ""
    }
  ];

  selectedUSer: Usuarios = new Usuarios();

  agregarUsuario(){
  
    // this.selectedUSer.id = this.usuariosArray.length + 1;
    this.usuariosArray.push(this.selectedUSer);

    this.selectedUSer = new Usuarios() //Limpia el campo de texto


  }
  


  cargarUsu(id: number){

    // usuario

    // this.selectedUSer.id = this.usuariosArray[usuarios.id];

  }


  eliminarUsu(){

    if (confirm("¿Está seguro de eliminar el usuario?")){


    }


  }


}
