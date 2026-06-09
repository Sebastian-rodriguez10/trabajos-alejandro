import { Component, Input } from '@angular/core';
import { Product } from '../../services/product.types';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() productos: Product[] = [];
}


