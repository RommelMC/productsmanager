import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ProductsService} from './../products.service';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';
import {Product} from './../product';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  tempProd: Product = new Product();
  product: Product;
  subscription: Subscription;
  constructor(private _router: Router,private _route: ActivatedRoute, private _productService: ProductsService) { }

  ngOnInit(): void {
    this.subscription = this._route.paramMap.switchMap(params => {
      return this._productService.getProduct(parseInt(params.get('id')));
    }).subscribe(product=>{
      this.product = product;
      this.tempProd.name = product.name;
      this.tempProd.price = product.price;
      this.tempProd.image = product.image;
     });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(){
    this.product.name = this.tempProd.name;
    this.product.image = this.tempProd.image;
    this.product.price = this.tempProd.price;
    this._router.navigate(['products']);
  }
}
