import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { ObrasComponent } from './components/obras/obras.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { CrearSolicitudComponent } from './components/crear-solicitud/crear-solicitud.component';
import { ModificarSolicitudComponent } from './components/modificar-solicitud/modificar-solicitud.component';
import { CrearCotizacionComponent } from './components/crear-cotizacion/crear-cotizacion.component';
import { ModificarCotizacionComponent } from './components/modificar-cotizacion/modificar-cotizacion.component';
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
