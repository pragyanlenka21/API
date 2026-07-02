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

  search: any = ''

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit(): void {
    this.getDataObs();
    // this.getDataObs();
  }

  // this is the list API call
  getDataObs() {
    this.testService.getPostWithObs().subscribe({
      next: (response) => {
        console.log(response);
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

  // This is click event to send ID and route to navigate
  getDetails(id: number) {
    console.log(id);
    this.router.navigate(['/card-details', id]);
  }

  // searchItem(){
  //   this.getDataObs();
  // }
}
