import { Component, Input } from '@angular/core';
import { DateType, FormData } from '../form-section/form-section.component';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrl: './step4.component.css'
})
export class Step4Component {
  @Input() dateType!: DateType;
  @Input() formData!: FormData;
  @Input() updateFormData!: <K extends keyof FormData>(field: K, values: FormData[K]) => void;
  @Input() backToSubscriptionStep!: () => void;

  isMonthly = (): boolean => {
    return this.dateType === 'monthly';
  }

  getTotalPrice = () => {
    const { subscription, addons } = this.formData;
    if (this.dateType === 'monthly') {
      const subscriptionPrice = subscription?.priceToAdd.monthly;
      const addonsPrice = addons?.reduce((acc, curr) => acc + curr.priceToAdd.monthly, 0) ?? 0;
      return subscriptionPrice! + addonsPrice;
    }

    const subscriptionPrice = subscription?.priceToAdd.yearly;
      const addonsPrice = addons?.reduce((acc, curr) => acc + curr.priceToAdd.yearly, 0) ?? 0;
      return subscriptionPrice! + addonsPrice;
  }
  
  removeAddon = (id: number) => {
    const updatedAddons = this.formData.addons!.filter(addon => addon.id !== id);
    this.updateFormData('addons', updatedAddons);
  }

}
