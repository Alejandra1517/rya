import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Servicios } from '../../models/servicios';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  constructor(private toastrSve: ToastrService) {}


  serviciosArray: Servicios[] = [
    {

      idServicio: 1,
      nombreServicio: 'acabado',
      categoria: 'obra blanca',
      estado: 'activo',
      fecha: '05/09/2022'

    },
    {

      idServicio: 2,
      nombreServicio: 'estuco',
      categoria: 'obra blanca',
      estado: 'activo',
      fecha: '05/09/2022'

    }
  ];


  selectedServicio: Servicios = new Servicios();

  editServicio:any = {};

  agregarServicio(){
  
    this.serviciosArray.push(this.selectedServicio);

    this.selectedServicio = new Servicios() //Limpia el campo de texto
    
    // this.selectedCliente.id += 1;

    this.toastrSve.success('Agregado correctamente');

    


  }


  
  cargarServicio(servicio: Servicios){

    this.editServicio=servicio; 

  }


  editarServicio(){

    this.selectedServicio = this.editServicio

    this.toastrSve.info('Editado correctamente')
      

  }



  eliminarServicio(){

    if (confirm("¿Está seguro de eliminar el usuario?")){

      this.serviciosArray = this.serviciosArray.filter(x => x != this.selectedServicio)
     
      this.selectedServicio = new Servicios()

      this.toastrSve.error('Eliminado correctamente')

    }


  }

}
