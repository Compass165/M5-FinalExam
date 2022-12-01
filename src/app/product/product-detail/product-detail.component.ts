import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{


  // @ts-ignore
  product: Product;

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.productService.findById(id).subscribe(
      next => (this.product = next),
      error => {
        console.log(error);
        // @ts-ignore
        this.product = null;
      }
    )
  }

}
