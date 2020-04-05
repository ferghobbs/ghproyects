import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductosIdxInterface} from '../interfaces/productosIdx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: ProductosIdxInterface[]=[];
  cargando=true;
  productosFiltrado:ProductosIdxInterface[]=[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){

    return new Promise((resolve,rejects)=>{  
      this.http.get('https://angular-portafolio-56102.firebaseio.com/productos_idx.json').subscribe((res:ProductosIdxInterface[])=>{
      this.productos=res;
      this.cargando=false;
      resolve();
      }
    )})}

  
  
    public getProducto(id:string){
      return this.http.get(`https://angular-portafolio-56102.firebaseio.com/productos/${id}.json`);

    }

    buscarProducto(termino:string){
      if (this.productos.length==0){
        //buscar productos
        this.cargarProductos().then(()=>{
          this.filtrarProductos(termino)
        })
      }else{
        this.filtrarProductos(termino)
      }

    }

    private filtrarProductos (termino:string){
      this.productosFiltrado=[];
      termino= termino.toLocaleLowerCase();
      
      this.productos.forEach(prod=>{
        let tituloLower = prod.titulo.toLocaleLowerCase();  
        let categoriaLower = prod.categoria.toLocaleLowerCase();
        if(categoriaLower.indexOf(termino)>= 0 || tituloLower.indexOf(termino)>=0){
          this.productosFiltrado.push(prod);
        }
      })
    }
}

