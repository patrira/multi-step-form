import { Component,Input,OnInit } from '@angular/core';
import { DateType, FormData } from '../form-section/form-section.component';


type PriceToAddType = {
  monthly: number,
  yearly: number
}

type AddonType = 'Online Service' | 'Larger Storage' | 'Customizable Profile'

export interface Addon {
  id: number,
  selected: boolean
  name: AddonType
  description: string
  monthlyAdditionalPrice: `+$${number}/mo`
  yearlyAdditionalPrice: `+$${number}/yr`
  priceToAdd: PriceToAddType
}

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component implements OnInit {
  @Input() dateType!: DateType;
  @Input() formData!: FormData;
  @Input() updateFormData!: <K extends keyof FormData>(field: K, values: FormData[K]) => void
  addons: Addon[] = [
    {
      id: 0,
      selected: false,
      name: 'Online Service',
      description: 'Access to multiplayer games',
      monthlyAdditionalPrice: '+$1/mo',
      yearlyAdditionalPrice: '+$10/yr',
      priceToAdd: {
        monthly: 1,
        yearly: 10
      }
    },
    {
      id: 1,
      selected: false,
      name: 'Larger Storage',
      description: 'Extra 1TB of cloud storage',
      monthlyAdditionalPrice: '+$2/mo',
      yearlyAdditionalPrice: '+$20/yr',
      priceToAdd: {
        monthly: 2,
        yearly: 20
      }
    },
    {
      id: 2,
      selected: false,
      name: 'Customizable Profile',
      description: 'Custom theme on your profile',
      monthlyAdditionalPrice: '+$2/mo',
      yearlyAdditionalPrice: '+$20/yr',
      priceToAdd: {
        monthly: 2,
        yearly: 20
      }
    }
  ]

  handleAddonUpdate = (id: number) => {
    const updatedAddons = this.addons.map(addon => {
      if (addon.id === id) return {...addon, selected: !addon.selected}
      return {...addon}
    });
    this.addons = updatedAddons;
    this.updateFormData('addons', updatedAddons.filter(addon => addon.selected));
  }

  ngOnInit() {
    if (this.formData.addons !== undefined && this.formData.addons.length > 0) {
      const selectedAddonsIds = this.formData.addons.filter(addon => addon.selected).map(addon => addon.id);
      const unselectedAddons = this.addons.filter(addon => !selectedAddonsIds.includes(addon.id));
      const sortedAddons = [...this.formData.addons, ...unselectedAddons].sort((a, b) => a.id - b.id)
      this.addons = sortedAddons;
    }
  }

}
