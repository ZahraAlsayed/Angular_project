import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  gold="jewelery";
  clothing = "men's clothing";
  electronics = "electronics";
  constructor(private route:ActivatedRoute){}
  products_data:any;
  str:any;

  ngOnInit() {
    this.str=this.route.snapshot.paramMap.get('str')
   
    fetch('https://fakestoreapi.com/products/category/' + this.str)
    .then((response) => response.json())
    .then((result) => (this.products_data = result));
     console.log(this.products_data);
    console.log('Component initialized:');
  }
 

}
