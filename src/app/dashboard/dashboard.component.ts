import { Component } from '@angular/core';
import { TestService } from '../common-service/test.service';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';
import { ProductcardComponent } from '../productcard/productcard.component';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ProductcardComponent,BoxComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  products: any[] = [];
  id:any;

  constructor(private productService: TestService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getPostWithObs().subscribe((res: any) => {
      this.products = res.products;
      // this.getdetails(this.id);
    });

  }

   
  
}
