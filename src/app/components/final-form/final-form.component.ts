import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-final-form',
  
  templateUrl: './final-form.component.html',
  styleUrls: ['./final-form.component.css']
})
export class FinalFormComponent {
  @Input() restartForm!:() => void;
}