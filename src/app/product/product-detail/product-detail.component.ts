import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{


  // @ts-ignore
  id: number;
  // @ts-ignore
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getProduct(this.id)
    })
  }

  ngOnInit() {
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        title: new FormControl(product.title),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      })
    })
  }

  editProduct() {
    const editProduct = this.productForm.value;
    this.productService.edit(editProduct.id, editProduct).subscribe(()=>{
      alert("Update Success!");
    })
  }

}