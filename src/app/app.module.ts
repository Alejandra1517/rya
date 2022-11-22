import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';

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

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { ModificarSolicitudComponent } from './modificar-solicitud/modificar-solicitud.component';
import { CrearCotizacionComponent } from './crear-cotizacion/crear-cotizacion.component';
import { ModificarCotizacionComponent } from './modificar-cotizacion/modificar-cotizacion.component';
// import { EnsayoComponent } from './ensayo/ensayo.component';



const appRoutes:Routes = [

  {path: 'usuarios', component:UsuariosComponent},
  {path: 'materiales', component:MaterialesComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'empleados', component:EmpleadosComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'solicitudes', component:SolicitudesComponent},
  {path: 'cotizaciones', component:CotizacionesComponent},
  {path: 'obras', component:ObrasComponent},
  {path: 'configuracion', component:ConfiguracionComponent},
  {path: 'crear-solicitud', component:CrearSolicitudComponent},
  {path: 'modificar-solicitud', component:ModificarSolicitudComponent},
  {path: 'crear-cotizacion', component:CrearCotizacionComponent},
  {path: 'modificar-cotizacion', component:ModificarCotizacionComponent}
  // {path: 'ensayo', component:EnsayoComponent}



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
    ObrasComponent,
    ConfiguracionComponent,
    CrearSolicitudComponent,
    ModificarSolicitudComponent,
    CrearCotizacionComponent,
    ModificarCotizacionComponent
    // EnsayoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
