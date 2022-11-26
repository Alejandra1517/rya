import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Clientes } from '../../models/clientes'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {

  constructor(private toastrSve: ToastrService) {}



  clientesArray: Clientes[] = [
    {
      idCliente: 1,
      nombreCliente: "Jorge123",
      documento: "156324891",
      telefono: 3137632689,
      direccion: "cll 87a",
      estado: "activo",
      fecha: "20/17/2022"
    },
    {
      idCliente: 2,
      nombreCliente: "Julian123",
      documento: "1026130800",
      telefono: 313987323,
      direccion: "cll 20",
      estado: "activo",
      fecha: "20/17/2022"
    }
  ];


  selectedCliente: Clientes = new Clientes();

  editCliente:any = {};

  agregarCliente(){
  
    this.clientesArray.push(this.selectedCliente);

    this.selectedCliente = new Clientes() //Limpia el campo de texto
    
    // this.selectedCliente.id += 1;

    this.toastrSve.success('Agregado correctamente');

    


  }


  
  cargarCliente(cliente: Clientes){

    this.editCliente=cliente;
    
    
 

  }


  editarCliente(){

    this.selectedCliente = this.editCliente

    this.toastrSve.info('Editado correctamente')
      

  }



  eliminarCliente(){

    if (confirm("¿Está seguro de eliminar el usuario?")){

      this.clientesArray = this.clientesArray.filter(x => x != this.selectedCliente)
     
      this.selectedCliente = new Clientes()

      this.toastrSve.error('Eliminado correctamente')

    }


  }



}
