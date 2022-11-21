import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Obras } from '../models/obras'

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent {


  
  constructor(private toastrSve: ToastrService) {}


  obrasArray: Obras[] = [
    {
      idObra:1,
      nombreCliente:"Julian",
      servicios:"Baldosa",
      estadoServicio:"activo",
      cantidad:2,
      estado:"en proceso",
      fechaRegistro:"17/02/2022"
    },
    {
      idObra:2,
      nombreCliente:"Liliana",
      servicios:"ventana",
      estadoServicio:"activo",
      cantidad:2,
      estado:"Terminada",
      fechaRegistro:"17/02/2022"
    }
  ];

  selectedObra: Obras = new Obras();

  editCliente:any = {};

  agregarObra(){
  
    this.obrasArray.push(this.selectedObra);

    this.selectedObra = new Obras() //Limpia el campo de texto
    
    // this.selectedCliente.id += 1;

    this.toastrSve.success('Agregado correctamente');

    


  }


  
  cargarObra(obras: Obras){

    this.selectedObra=obras; 

  }


  editarObra(){

    this.selectedObra = this.selectedObra

    this.toastrSve.info('Editado correctamente')
      

  }

  



  eliminarObra(){

    if (confirm("¿Está seguro de eliminar el usuario?")){

      this.obrasArray = this.obrasArray.filter(x => x != this.selectedObra)

     
      this.selectedObra = new Obras()

      this.toastrSve.error('Eliminado correctamente')

    }


  }


}