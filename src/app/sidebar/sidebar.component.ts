import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TestService } from '../common-service/test.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  myData: any[] = [];
  category: any;

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCategories2();

    this.testService.getData.subscribe((e: any) => {
      // alert(e);
      this.category = e;
    })
  }

  getCategories2() {
    this.testService.getCategories().subscribe({
      next: (response: any) => {
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

  goToProductPage(name: any) {
    this.testService.getValueFromSidebar(name);
    this.router.navigate([''])
  }

  makeDashboard(){
    // this.category = '';
  }
}
