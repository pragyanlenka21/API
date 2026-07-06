import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../common-service/test.service';

@Component({
  selector: 'app-productcard',
  imports: [],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {

  @Input() productdata: any;

  constructor(private productService: TestService,private router:Router) {

   }

  getdetails(id: number) {
    // console.log(id);
    this.router.navigate(['/card-details', id]);
  }
}
