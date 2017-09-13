import { Component, OnInit, Input } from '@angular/core';
import {Product} from './../../product';
import {ProductsService} from './../../products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() productItem: Product;
  constructor(private _productService: ProductsService, private _router: Router) { }

  ngOnInit() {
  }

  deleteProd(id){
    console.log("asdfa");
    this._productService.deleteProduct(id);
    this._router.navigate(['products']);
  }

}
