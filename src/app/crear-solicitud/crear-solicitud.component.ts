import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { crearSolicitud } from '../models/crearSolicitud';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  constructor(private toastrSve: ToastrService) { }



  solicitudesArray: crearSolicitud[] = [
    {

     servicio: "baldosa",
     cantidad: 3,
     descripcion: "baldosa blanca"
    
    },
    {

      servicio: "puerta",
      cantidad: 2,
      descripcion: "de madera :v"
    
    }
  ];


  selectedSolicitud: crearSolicitud = new crearSolicitud();

  editSolicitud:any = {};

  agregarCliente(){
  
    this.solicitudesArray.push(this.selectedSolicitud);

    this.selectedSolicitud = new crearSolicitud() //Limpia el campo de texto
    
    // this.selectedCliente.id += 1;

    this.toastrSve.success('Agregado correctamente');

    


  }


  
  cargarCliente(cliente: crearSolicitud){

    this.editSolicitud=cliente; 

  }


  editarCliente(){

    this.selectedSolicitud = this.editSolicitud

    this.toastrSve.info('Editado correctamente')
      

  }



  eliminarCliente(){

    if (confirm("¿Está seguro de eliminar el usuario?")){

      this.solicitudesArray = this.solicitudesArray.filter(x => x != this.selectedSolicitud)
     
      this.selectedSolicitud = new crearSolicitud()

      this.toastrSve.error('Eliminado correctamente')

    }


  }




  ngOnInit(): void {

    console.log("hola")


  }

}
