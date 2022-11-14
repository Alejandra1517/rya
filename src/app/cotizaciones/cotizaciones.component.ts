import { Component } from '@angular/core';
import { Cotizaciones } from '../models/cotizaciones';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent {

  cotizacionesArray: Cotizaciones[] = [
    {
      id: 1,
      cliente: "Luis",
      estado: "activo",
      fechaInicio: "20/07/2022",
      fechaDuracion: "20/12/2022"
    },
    {
      id: 1,
      cliente: "Sofía",
      estado: "activo",
      fechaInicio: "04/01/2022",
      fechaDuracion: "10/09/2022"
    }
  ];

  selectedCotizacion: Cotizaciones = new Cotizaciones();

  editCotizacion!:any;

  agregarCotizacion(){
  
    // this.selectedUSer.id = this.usuariosArray.length + 1;
    this.cotizacionesArray.push(this.selectedCotizacion);

    this.selectedCotizacion = new Cotizaciones() //Limpia el campo de texto


  }
  


  cargarCotizacion(id: number){

    this.editCotizacion=id;
    

  }


  eliminarCotizacion(id: number){

    // if (confirm("¿Está seguro de eliminar el usuario?")){

      // alert(id)
      this.cotizacionesArray.slice(id, 1);

      // this.cargarCl}iente()

    // }


  }


}
