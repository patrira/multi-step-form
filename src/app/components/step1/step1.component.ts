import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormData, InputErrors } from '../form-section/form-section.component';

export interface PersonalInfo {
  name: string,
  email: string,
  phoneNumber: string,
}

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  @Input() inputErrors!: InputErrors;
  @Input() resetInputErrors!: () => void;
  @Input() formData!: FormData;
  @Input() updateFormData!: <K extends keyof FormData>(field: K, values: FormData[K]) => void;
  personalInfo: PersonalInfo = {
    name: '',
    email: '',
    phoneNumber: ''
  };

  formSubmitted = false;

  constructor(private router: Router) {}

  handleInput = (e: Event) => {
    this.resetInputErrors();
    const target = e.target as HTMLInputElement;
    const inputField = target.name as keyof PersonalInfo;
    const inputValue = target.value;

    this.updatePersonalInfo(inputField, inputValue);
    this.updateFormData('personalInfo', this.personalInfo);
  }

  updatePersonalInfo = <K extends keyof PersonalInfo>(field: K, value: PersonalInfo[K]) => {
    const newPersonalInfo = { ...this.personalInfo, [field]: value };
    this.personalInfo = newPersonalInfo;
  }

  ngOnInit(): void {
    if (this.formData.personalInfo !== undefined) {
      this.personalInfo = { ...this.formData.personalInfo };
    }
  }

  onNext() {
    this.formSubmitted = true;
    if (this.validateForm()) {
      // Proceed to the next step or navigate to the next route
      this.router.navigate(['/next-step']);
    } else {
      // Handle validation errors
      this.updateInputErrors();
    }
  }

  validateForm(): boolean {
    return this.personalInfo.name !== '' && 
           this.personalInfo.email !== '' && 
           this.personalInfo.phoneNumber !== '';
  }

  updateInputErrors() {
    if (this.personalInfo.name === '') {
      this.inputErrors.name = 'Name is required.';
    }
    if (this.personalInfo.email === '') {
      this.inputErrors.email = 'Email is required.';
    }
    if (this.personalInfo.phoneNumber === '') {
      this.inputErrors.phoneNumber = 'Phone number is required.';
    }
  }
}
