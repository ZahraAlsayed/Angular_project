import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrl: './detalis.component.css'
})
export class DetalisComponent implements OnInit {
 product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // الحصول على معرف المنتج من الرابط
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(+productId).subscribe(data => {
        this.product = data;
      });
    }
  }

}
