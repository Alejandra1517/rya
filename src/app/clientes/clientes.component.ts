import { Component } from '@angular/core';

import { Clientes } from '../models/clientes'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {


  clientesArray: Clientes[] = [
    {
      id: 1,
      documento: "156324891",
      usuario: "Jorge123",
      estado: "activo",
      fecha: "20/17/2022"
    },
    {
      id: 2,
      documento: "1026130800",
      usuario: "Julian123",
      estado: "activo",
      fecha: "20/17/2022"
    }
  ];

  selectedCliente: Clientes = new Clientes();

  editCliente:any = {documento:""};

  agregarCliente(){
  
    // this.selectedUSer.id = this.usuariosArray.length + 1;
    this.clientesArray.push(this.selectedCliente);

    this.selectedCliente = new Clientes() //Limpia el campo de texto


  }
  


  cargarCliente(id: number){

    this.editCliente.documento=id;
    

  }


  eliminarCliente(id: number){

    // if (confirm("¿Está seguro de eliminar el usuario?")){

      // alert(id)
      this.clientesArray.slice(id, 1);

      // this.cargarCl}iente()

    // }


  }

  

}
