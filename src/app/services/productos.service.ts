import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductosIdxInterface} from '../interfaces/productosIdx.interface'
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: ProductosIdxInterface[];
  cargando=true;
  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    this.http.get('https://angular-portafolio-56102.firebaseio.com/productos_idx.json').subscribe((res:ProductosIdxInterface[])=>{
      this.productos=res;
      this.cargando=false;
    })}
  
    public getProducto(id:string){
      return this.http.get(`https://angular-portafolio-56102.firebaseio.com/productos/${id}.json`);

    }
}
