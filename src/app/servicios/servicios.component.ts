import { Component } from '@angular/core';

import { Servicios } from '../models/servicios';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  serviciosArray: Servicios[] = [
    {
      id: 1,
      nombre: "Acabados",
      categoria: "Obra blanca",
      encargado: "Felipe Motoya",
      estado: "Activo",
      fecha: "13/12/2022"
    },
    {
      id: 2,
      nombre: "Baldosa",
      categoria: "Obra blanca",
      encargado: "Felipe Motoya",
      estado: "Activo",
      fecha: "13/12/2022"
    }
  ];

  selectedServicio: Servicios = new Servicios();

  agregarServicio(){
  
    // this.selectedUSer.id = this.usuariosArray.length + 1;
    this.serviciosArray.push(this.selectedServicio);

    this.selectedServicio = new Servicios() //Limpia el campo de texto


  }
  


  cargarServicio(id: number){

    // usuario

    // this.selectedUSer.id = this.usuariosArray[usuarios.id];

  }



  modificaServicio(id: number){

    // usuario

    // this.selectedUSer.id = this.usuariosArray[usuarios.id];

  }


  eliminarServicio(){

    if (confirm("¿Está seguro de eliminar el servicio?")){


    }


  }
}
