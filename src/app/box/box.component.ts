import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {

  @Input() title:any;
  @Input() desc:any;
  @Input() color:any;


}
