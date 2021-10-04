import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  constructor() { }
  anadirProductosCarrito(producto: Product) {
    this.items.push(producto);
  }
  obtenerProductos() {
    return this.items;
  }
  vaciarCarrito() {
    this.items = [];
    return this.items;
  }
}
