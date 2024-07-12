import { Component,Input } from '@angular/core';
import { DateType } from '../form-section/form-section.component';


@Component({
  selector: 'app-date-handler',
  templateUrl: './date-handler.component.html',
  styleUrl: './date-handler.component.css'
})
export class DateHandlerComponent {
  @Input() dateType!: DateType;
  @Input() handleDateTypeChange!: () => void;

}
