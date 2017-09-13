import { Component, OnInit } from '@angular/core';
import {Product} from './../product';
import {ProductsService} from './../products.service';
@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {
  products: Product[] = [];

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void{
    this._productService.getProducts().then(products => this.products = products);
  }

}
