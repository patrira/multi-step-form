import { Component,Input,OnInit } from '@angular/core';


interface Step {
  stepDesc: string;
  stepNumber: number;
}


@Component({
  selector: 'app-steps',
  
  
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent implements OnInit {
  @Input() currentStep!: number;

  steps: Step[] = [
    {stepNumber: 1, stepDesc: 'Your Info'},
    {stepNumber: 2, stepDesc: 'Select Plan'},
    {stepNumber: 3, stepDesc: 'Add-ons'},
    {stepNumber: 4, stepDesc: 'Summary'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
