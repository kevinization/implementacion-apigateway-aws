import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { EmpleadoModel } from './empleado.model';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleado: EmpleadoModel = new EmpleadoModel();
  empleados: Array<any> = new Array();

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.listarEmpleados();
  }

  actualizar(id: string){
    this.empleadosService.actualizarEmpleado(id, this.empleado).subscribe(empleado => {
      this.empleado = new EmpleadoModel();
      this.listarEmpleados();
     }, err => { 
       console.log('Error al actualizar empleado ', err) 
      })
  }

  remover(id: string){
    this.empleadosService.removerEmpleado(id).subscribe(empleado => {
      this.empleado = new EmpleadoModel();
      this.listarEmpleados();
     }, err => { 
       console.log('Error al remover empleado ', err) 
      })
  }

  registrar(){
    console.log(this.empleado)
    this.empleadosService.registrarEmpleado(this.empleado).subscribe(empleado => {
      this.empleado = new EmpleadoModel();
      this.listarEmpleados();
     }, err => { 
       console.log('Error al registrar empleado ', err) 
      })
  }

  listarEmpleados(){
    this.empleadosService.listarEmpleados().subscribe(empleados => {
      this.empleados = empleados.body.Items;
      console.log('EMPLEADOS: ' + empleados.body.Items);
    }, err => {
      console.log('Error al listar los empleados', err);
    });
  }

}
