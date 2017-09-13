import { Component, OnInit } from '@angular/core';
import {Product} from './../product';
import {ProductsService} from './../products.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product = new Product();
  constructor(private _productService: ProductsService) { }
  onSubmit(){
    var id = 0;
    var self = this;
    this._productService.getProducts().then(function(products){
      if(products.length != 0)
        self.product._id = products[products.length-1]._id + 1;
      else
        self.product._id = 1;

      self._productService.addProduct(self.product);
      self.product = new Product();
    })
  }
  ngOnInit() {
  }

}
