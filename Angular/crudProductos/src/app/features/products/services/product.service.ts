import { Injectable } from '@angular/core';
import { CreateProductInput, Product } from './product.types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];
  private nextId = 1;

  getAll(): Product[] {
    return [...this.products];
  }

  add(input: CreateProductInput): Product {
    const nuevo: Product = {
      id: this.nextId++,
      nombre: input.nombre,
      precio: input.precio
    };
    this.products.push(nuevo);
    return nuevo;
  }
}

