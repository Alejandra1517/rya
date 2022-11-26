import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


import { Materiales } from '../../models/materiales';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent {

  constructor(private toastrSve: ToastrService){}

  materialesArray: Materiales[] = [
    {
      id: 1,
      categoria: "Ventana",
      infoMaterial: "Madera",
      estado: "Activo",
      fecha: "13/12/2022"
    },
    {
      id: 2,
      categoria: "Pintura de interior",
      infoMaterial: "A base de color blanco",
      estado: "Estado",
      fecha: "13/12/2022"
    }
  ];

  selectedMaterial: Materiales = new Materiales();

  agregarMaterial(){
  
    // this.selectedUSer.id = this.usuariosArray.length + 1;
    this.materialesArray.push(this.selectedMaterial);

    this.selectedMaterial = new Materiales() //Limpia el campo de texto


  }
  


  cargarMaterial(id: number){

    // usuario

    // this.selectedUSer.id = this.usuariosArray[usuarios.id];

  }



  modificaMaterial(id: number){

    // usuario

    // this.selectedUSer.id = this.usuariosArray[usuarios.id];

  }


  eliminarMaterial(){

    if (confirm("¿Está seguro de eliminar el usuario?")){


    }


  }
}
