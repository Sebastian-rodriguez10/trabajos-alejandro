import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../services/product.types';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  nombre = '';
  precio: number | '' = '';

  @Output() productoCreado = new EventEmitter<void>();

  constructor(private readonly productService: ProductService) {}

  get precioNumber(): number {
    return typeof this.precio === 'number' ? this.precio : Number(this.precio);
  }

  get canSubmit(): boolean {
    const nombreOk = this.nombre.trim().length > 0;
    const precioOk =
      this.precio !== '' &&
      Number.isFinite(this.precioNumber) &&
      this.precioNumber > 0;
    return nombreOk && precioOk;
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (!this.canSubmit) return;

    const nuevo: Omit<Product, 'id'> = {
      nombre: this.nombre.trim(),
      precio: this.precioNumber
    };

    this.productService.add(nuevo);
    this.nombre = '';
    this.precio = '';

    this.productoCreado.emit();
  }
}


