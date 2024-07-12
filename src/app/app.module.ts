import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsComponent } from './components/steps/steps.component';
import { FormSectionComponent, DateType } from './components/form-section/form-section.component';
import { FinalFormComponent } from './components/final-form/final-form.component';
import { StepHandlerComponent } from './components/step-handler/step-handler.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { Step4Component } from './components/step4/step4.component';
import { FormStepsComponent } from './components/form-steps/form-steps.component';
import { DateHandlerComponent } from './components/date-handler/date-handler.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    FormSectionComponent,
    FinalFormComponent,
    StepHandlerComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    FormStepsComponent,
    DateHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule
    
    
    
   
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
