import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 products: any[] = [];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }
  // viewDetails(productId: number): void {
  //   this.router.navigate(['/detail', productId]);
  // }
  
}
