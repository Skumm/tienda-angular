import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  constructor(private http: HttpClient) { }
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
  obtenerGastosEnvio() {
    return this.http.get<{type: String, price: Number}[]>('/assets/shipping.json');
  }
}
