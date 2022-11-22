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
      idUsuario: 1,
      nombreRol: "Cliente",
      contrasena: "cliente123",
      estado: "activo",
      fechaRegistro: "17/02/2022"
    },
    {
  
      idUsuario: 2,
      nombreRol: "Administrador",
      contrasena: "admin123",
      estado: "activo",
      fechaRegistro: "17/02/2022"
  
    }
  ];

  selectedUSer: Usuarios = new Usuarios();

  agregarUsuario(){
  
    // this.selectedUSer.id = this.usuariosArray.length + 1;
    this.usuariosArray.push(this.selectedUSer);

    this.selectedUSer = new Usuarios() //Limpia el campo de texto


  }
  


  cargarUsu(usuario: Usuarios){

    // usuario

    // this.selectedUSer.id = this.usuariosArray[usuarios.id];

  }


  eliminarUsu(){

    if (confirm("¿Está seguro de eliminar el usuario?")){


    }


  }


}
