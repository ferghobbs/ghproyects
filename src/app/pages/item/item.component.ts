import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoInterface } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  cargandoItem=false;
  productoActual: ProductoInterface;
  id:string;

  constructor(private route: ActivatedRoute, public producto: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros =>{
      this.producto.getProducto(parametros['id']).
      subscribe((resp: ProductoInterface)=>{
        this.productoActual=resp;
        this.id= parametros['id'];
        this.cargandoItem=true;
      })
            
    })
  }

}
