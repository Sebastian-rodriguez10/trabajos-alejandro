export type Product = {
  id: number;
  nombre: string;
  precio: number;
};

export type CreateProductInput = Omit<Product, 'id'>;

