import { Component, Input } from '@angular/core';
import { FormStepInformation } from '../form-section/form-section.component';

@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrl: './form-steps.component.css'
})
export class FormStepsComponent {
  @Input() formStepInformation!: FormStepInformation;

}
