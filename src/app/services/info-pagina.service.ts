import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoTeam } from '../interfaces/info-team.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo : InfoTeam[]=[]

  constructor(private http: HttpClient) {
    
    this.cargarInfo();
    this.cargarEquipo();
    
    
   }
   private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) =>{
        
        this.info=resp;

      })
   }
   private cargarEquipo(){
      this.http.get('https://angular-portafolio-56102.firebaseio.com/equipo.json').
      subscribe((resp:InfoTeam[])=>{
        this.equipo= resp;
        setTimeout(()=>{
        this.cargada=true;},200)
      })
   }
}
