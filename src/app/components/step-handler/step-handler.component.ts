import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-step-handler',
  templateUrl: './step-handler.component.html',
  styleUrl: './step-handler.component.css'
})
export class StepHandlerComponent implements OnInit {
  @Input() stepNumber: number = 0
  @Input() stepDesc: string = ''
  @Input() currentStep!: number;

  constructor() {}

  ngOnInit() {
  }


}
