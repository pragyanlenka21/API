import { Component } from '@angular/core';
import { TestService } from '../common-service/test.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  myData: any[] = [];

  search: any = '';

  showLoader = true;

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit(): void {

    // this.getDataObs();

    this.testService.getData.subscribe((e: any) => {
      // alert(e);

      if (e == 'all') {
        this.showLoader = true;
        this.getDataObs();
      } else {
        this.showLoader = true;
        this.getProductByCategory(e);
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.getDataObs();
  }

  // this is the list API call
  getDataObs() {
    this.testService.getPostWithObs().subscribe({
      next: (response) => {
        console.log(response);
        this.showLoader = false;
        this.myData = response.products;


      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    })
  }

  getProductByCategory(category: any) {
    this.testService.getProductByCategories(category).subscribe({
      next: (response: any) => {
        console.log(response);
         this.showLoader = false;
        this.myData = response.products;

        this.showLoader = false;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    })
  }

  // This is click event to send ID and route to navigate
  getDetails(id: number) {
    console.log(id);
    this.router.navigate(['/card-details', id]);
  }

  goFormsPage() {
    this.router.navigate(['forms']);
  }

  // searchItem(){
  //   this.getDataObs();
  // }
}
