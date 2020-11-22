import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoModel } from './empleados/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  listarEmpleados(): Observable<any>{
    return this.http.get('https://ud63y02qil.execute-api.us-east-2.amazonaws.com/dev');
  }

  registrarEmpleado(empleado: EmpleadoModel): Observable<any>{
    return this.http.post('https://ud63y02qil.execute-api.us-east-2.amazonaws.com/dev', empleado);
  }

  actualizarEmpleado(id: any, empleado: EmpleadoModel): Observable<any>{
    return this.http.put('https://ud63y02qil.execute-api.us-east-2.amazonaws.com/dev/'.concat(id), empleado);
  }

  removerEmpleado(id: any){
    return this.http.delete('https://ud63y02qil.execute-api.us-east-2.amazonaws.com/dev/'.concat(id));
  }
}
