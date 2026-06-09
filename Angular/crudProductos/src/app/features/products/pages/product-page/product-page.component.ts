import { Component } from '@angular/core';
import { Product } from '../../services/product.types';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: false,
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  productos: Product[] = [];

  constructor(private readonly productService: ProductService) {
    this.productos = this.productService.getAll();
  }

  onProductoCreado() {
    this.productos = this.productService.getAll();
  }
}

