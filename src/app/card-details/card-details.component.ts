import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../common-service/test.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-details',
  imports: [CommonModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {

  id: any;
  myData: any = {
    
  };
  constructor(private route: ActivatedRoute, private t: TestService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    this.getData();
  }


  getData() {
    this.t.getDetails(this.id).subscribe({
      next: (response) => {
        console.log(response);
        this.myData = response;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    })
  }

}
