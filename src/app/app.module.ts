import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ClientesComponent } from './clientes/clientes.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { ObrasComponent } from './obras/obras.component';



const appRoutes:Routes = [

  {path: 'usuarios', component:UsuariosComponent},
  {path: 'materiales', component:MaterialesComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'empleados', component:EmpleadosComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'solicitudes', component:SolicitudesComponent},
  {path: 'cotizaciones', component:CotizacionesComponent},
  {path: 'obras', component:ObrasComponent}



];


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    ControlSidebarComponent,
    UsuariosComponent,
    MaterialesComponent,
    ServiciosComponent,
    EmpleadosComponent,
    ClientesComponent,
    SolicitudesComponent,
    CotizacionesComponent,
    ObrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
