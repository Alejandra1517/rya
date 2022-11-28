
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Roles } from '../models/roles'

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {

  roles: Roles[] = [
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

  rolesForm: FormGroup;
  rolesEditForm: FormGroup;


constructor(private fb: FormBuilder,
  private toastrSve: ToastrService) {



    this.rolesForm = this.fb.group({
      nombreRol: ['', Validators.required],
      estado: ['', Validators.required]
    })

    this.rolesEditForm = this.fb.group({
      nombreRol: ['', Validators.required],
      estado: ['', Validators.required]
    })


  }


  selectedRoles: Roles = new Roles();

agregarRoles(){

  this.roles.push(this.selectedRoles);

  this.toastrSve.success('El producto fue registrado con exito!', 'Producto Registrado!');

  // this.selectedEmpleado = new Servicios()

}






editRol:any = {};

cargarRol(roles: Roles){
  
    this.editRol = roles

}



modificarRol(){

  this.toastrSve.info('Editado correctamente')

    this.editRol = new Roles();


}


eliminarRol(roles: Roles){

  if (confirm("¿Está seguro de eliminar el rol?")){

    this.roles = this.roles.filter(x => x != roles)
   
        roles = new Roles()
  
        this.toastrSve.error('Eliminado correctamente')

  }


}



}