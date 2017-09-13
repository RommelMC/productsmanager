import { Injectable } from '@angular/core';
import {Product} from './product';
@Injectable()
export class ProductsService {

  products: Product[] = [];
  constructor() { }

  getProducts(): Promise<Product[]>{
    return Promise.resolve(this.products);
  }

  getProduct(id: number): Promise<Product>{
    return new Promise((resolve, reject) => {
      var foundProd = this.products.find(product => product._id === id);
      if(foundProd){
        return resolve(foundProd);
      }
      reject(new Error('Product not found'));
    });
  }

  addProduct(product: Product): void{
    this.products.push(product);
  }

  deleteProduct(id: number): void{
    this.products.splice(this.products.findIndex(product => product._id === id), 1);
  }
}
