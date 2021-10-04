import { Component, OnInit } from '@angular/core';
import {Product, products} from '../products';
import {ActivatedRoute} from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute,
              private cartService: CartService) {  }

  ngOnInit(): void {
    const parametrosDeRuta = this.route.snapshot.paramMap;
    const idDeProductoEnRuta = Number(parametrosDeRuta.get('productId'));

    this.product = products.find((producto) => producto.id === idDeProductoEnRuta);
  }

  anadirAlCarrito(producto: Product) {
    this.cartService.anadirProductosCarrito(producto);
    window.alert('El producto se ha añadido al carrito')
  }
}
