import { Component } from '@angular/core';

import { Roles } from '../models/roles'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {


  constructor() { }


  rolesArray: Roles[] = [
    {

      idRol: 1,
      nombreRol: 'cliente',
      estado: 'activo',
      fechaRegistro: '20/05/2022'

    },

    {
  
      idRol: 2,
      nombreRol: 'administrador',
      estado: 'activo',
      fechaRegistro: '20/05/2022'
  
    }
  ];

  selectedUSer: Roles = new Roles();

  agregarUsuario(){
  
    // this.selectedUSer.id = this.RolesArray.length + 1;
    this.rolesArray.push(this.selectedUSer);

    this.selectedUSer = new Roles() //Limpia el campo de texto


  }
  


  cargarUsu(usuario: Roles){

    // usuario

    // this.selectedUSer.id = this.usuariosArray[usuarios.id];

  }


  eliminarUsu(){

    if (confirm("¿Está seguro de eliminar el usuario?")){


    }


  }




  

}
