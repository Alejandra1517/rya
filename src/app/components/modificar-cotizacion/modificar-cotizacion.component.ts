import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { modificarCotizaciones } from '../../models/modificarCotizacion'

@Component({
  selector: 'app-modificar-cotizacion',
  templateUrl: './modificar-cotizacion.component.html',
  styleUrls: ['./modificar-cotizacion.component.css']
})
export class ModificarCotizacionComponent {

  
  cotizacionesArray: modificarCotizaciones[] = [
    {
      id: 1,
      cliente: "Luis",
      estado: "activo",
      fechaInicio: "20/07/2022",
      fechaDuracion: "20/12/2022",
      servicio: "cimentación",
      cantidad: 1,
      descripcion: "obra negra",
      total: 50000
    },
    {
      id: 2,
      cliente: "Sofía",
      estado: "activo",
      fechaInicio: "04/01/2022",
      fechaDuracion: "10/09/2022",
      servicio: "pintura",
      cantidad: 1,
      descripcion: "obra blanca",
      total: 50000

    }
  ];
  

  selectedCotizacion: modificarCotizaciones = new modificarCotizaciones();


  constructor(private toastrSve: ToastrService) {}


  editCotizacion:any = {};

  agregarCotizacion(){
  
    this.cotizacionesArray.push(this.selectedCotizacion);

    this.selectedCotizacion = new modificarCotizaciones() //Limpia el campo de texto

    this.toastrSve.success('Cotización agregada correctamente');


  }


  
  cargarCotizacion(cotizacion: modificarCotizaciones){

    this.editCotizacion=cotizacion; 

  }


  editarCotizacion(){

    this.selectedCotizacion = this.editCotizacion

    this.toastrSve.info('Guardado correctamente')
      

  }



  eliminarCotizacion(){

    if (confirm("¿Está seguro de eliminar la cotización?")){

      this.cotizacionesArray = this.cotizacionesArray.filter(x => x != this.selectedCotizacion)
     
      this.selectedCotizacion = new modificarCotizaciones()

      this.toastrSve.error('Cotización eliminada correctamente')

    }



  }


}
