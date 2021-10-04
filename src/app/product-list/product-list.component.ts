import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent{

  products = products;

  share(): void {
    window.alert('El producto ha sido compartido');
  }

  onNotify(): void {
    window.alert('Serás avisado cuando el producto esté a la venta');
  }
}
