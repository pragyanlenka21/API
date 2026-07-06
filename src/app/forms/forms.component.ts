import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  myForm:any;
  constructor(){
    this.myForm = new FormGroup({
       
      
    

    })
  }

}
