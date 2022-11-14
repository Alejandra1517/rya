import { Component } from '@angular/core';
import { Empleados } from '../models/empleados';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent  {

  
  
  empleadosArray: Empleados[] = [
    {
      id: 1,
      nombre: "Andrés",
      apellido: "Jorge123",
      telefono: 3265482153,
      documento: "43080027",
      direccion: "Cll 23",
      estado: "activo",
      fecha: "20/17/2022"
      
    },
    {
      id: 2,
      nombre: "Cristian",
      apellido: "Jorge123",
      telefono: 3265482153,
      documento: "10256348",
      direccion: "Cll 130",
      estado: "Activo",
      fecha: "20/17/2022"
    }
  ];

  selectedEmpleado: Empleados = new Empleados();

  agregarEmpleado(){
  
    // this.selectedUSer.id = this.usuariosArray.length + 1;
    this.empleadosArray.push(this.selectedEmpleado);

    this.selectedEmpleado = new Empleados() //Limpia el campo de texto


  }
  


  cargarEmpleado(id: number){

    // usuario

    // this.selectedUSer.id = this.usuariosArray[usuarios.id];

  }


  eliminarEmpleado(){

    if (confirm("¿Está seguro de eliminar el empleado?")){


    }


  }

  



}
