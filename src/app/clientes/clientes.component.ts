import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Clientes } from '../models/clientes'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  clientes:Clientes[] = [

    {

      _id: 1,
      nombreCliente: "Alejandra",
      documento: "1026130800",
      telefono: 23323432,
      direccion: "Medellín",
      estado: "Activo",
      fecha: "03/05/2022"

    }

  ];

  clienteForm: FormGroup;
  clienteEditForm: FormGroup;


  constructor(private fb: FormBuilder,
    private toastrSve: ToastrService) {



      this.clienteForm = this.fb.group({
        nombreCliente: ['', Validators.required],
        documento: ['', Validators.required],
        telefono: ['', Validators.required],
        direccion: ['', Validators.required]
      })

      this.clienteEditForm = this.fb.group({
        nombreCliente: ['', Validators.required],
        documento: ['', Validators.required],
        telefono: ['', Validators.required],
        direccion: ['', Validators.required]
      })
  


    }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  selectedCliente: Clientes = new Clientes();

  agregarCliente(){
  
    this.clientes.push(this.selectedCliente);

    this.toastrSve.success('El producto fue registrado con exito!', 'Producto Registrado!');

    this.selectedCliente = new Clientes()

  }
  
  


  

  editCliente:any = {};

  cargarCliente(clientes: Clientes){
    
      this.editCliente = clientes

  }



  modificarCliente(){

    this.toastrSve.info('Editado correctamente')

      this.editCliente = new Clientes();


  }


  eliminarCliente(cliente: Clientes){

    if (confirm("¿Está seguro de eliminar este usuario?")){

      this.clientes = this.clientes.filter(x => x != cliente)
     
          cliente = new Clientes()
    
          this.toastrSve.error('Eliminado correctamente')

    }



    

  }

}
