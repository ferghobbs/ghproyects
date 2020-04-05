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

  constructor(private route: ActivatedRoute, public producto: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros =>{
      this.producto.getProducto(parametros['id']).
      subscribe((resp: ProductoInterface)=>{
        this.productoActual=resp;
        this.cargandoItem=true;
        console.log(this.productoActual.producto)
      })
            
    })
  }

}
