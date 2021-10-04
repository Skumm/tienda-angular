import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items = this.cartService.obtenerProductos();
  formularioEnvio = this.formBuilder.group({
    nombre: '',
    direccion: ''
  });
  constructor(private cartService: CartService,
              private formBuilder: FormBuilder) { }

  onSubmit(): void {
    this.items = this.cartService.vaciarCarrito();
    console.warn('Your order has been submitted', this.formularioEnvio.value);
    this.formularioEnvio.reset();
  }
}
