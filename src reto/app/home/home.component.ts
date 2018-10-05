import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario} from '../models/usuario'

import { HttpClientModule} from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /*isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );*/
    
  //constructor(private breakpointObserver: BreakpointObserver) {}
  usuArr: object;
  //constructor(private http: HttpClient) {}

  //UsuarioArray: object;          
constructor(private http: HttpClient) {}      
TituloUsuarios: string;    

  /*usuArr: Usuario[]=[ {id:1,nombre:'maria',clave:'123'},
                      {id:2,nombre:'pedro',clave:'456'},
                      {id:3,nombre:'pablo',clave:'789'}
]*/
ngOnInit():void{      
  this.http.get ('http://localhost:3100/api/v1/users').subscribe(        
  data => {          
  this.usuArr = data;         
  },(err: HttpErrorResponse) => {          
    if(err.error instanceof Error){            
      console.log('Error al consumir el servicio.');          
    }          
    else{            
      console.log('Error local');          
    }                  
  })            
}    
  //this.TituloUsuarios = "Usuario No. ";    TituloPagina = "Lista de usuarios";      
}
