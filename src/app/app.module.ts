import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';

import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
