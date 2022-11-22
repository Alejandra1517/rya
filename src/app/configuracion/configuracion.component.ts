import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Roles } from '../models/roles'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {


  constructor(private toastrSve: ToastrService) {}


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

  selectedRol: Roles = new Roles();
  editRol:any = {};



  agregarRol(){
  
    this.rolesArray.push(this.selectedRol);

    this.selectedRol = new Roles() //Limpia el campo de texto
    
    // this.selectedCliente.id += 1;

    this.toastrSve.success('Agregado correctamente');


  }
  


  cargarRol(rol: Roles){

    this.editRol=this.selectedRol; 

  }


  
  editarCliente(){

    this.selectedRol = this.editRol

    this.toastrSve.info('Editado correctamente')
      

  }


  eliminarRol(){

   
    if (confirm("¿Está seguro de eliminar el usuario?")){

      this.rolesArray = this.rolesArray.filter(x => x != this.selectedRol)
     
      this.selectedRol = new Roles()

      this.toastrSve.error('Eliminado correctamente')

    }



  }




  

}
