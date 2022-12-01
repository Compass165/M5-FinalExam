import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  })

  saveProduct() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.save(product).subscribe(()=>{
      alert("Add New Product Success!")
    });
    this.productForm.reset();
  }

}
