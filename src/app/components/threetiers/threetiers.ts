import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'three-tiers',
    standalone: true,
    imports: [CommonModule, ButtonModule, ToggleSwitchModule, FormsModule],
    templateUrl: './threetiers.html',
})
export class ThreeTiers {
    isYearly = signal(false);
    
    pricingPlans = [
        {
            name: 'Basic',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.',
            monthlyPrice: 9,
            yearlyPrice: 108,
            features: [
                'Arcu vitae elementum',
                'Dui faucibus in ornare',
                'Morbi tincidunt augue'
            ]
        },
        {
            name: 'Premium',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.',
            monthlyPrice: 29,
            yearlyPrice: 348,
            features: [
                'Arcu vitae elementum',
                'Dui faucibus in ornare',
                'Morbi tincidunt augue',
                'Duis ultricies lacus sed'
            ]
        },
        {
            name: 'Enterprise',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.',
            monthlyPrice: 49,
            yearlyPrice: 588,
            features: [
                'Arcu vitae elementum',
                'Dui faucibus in ornare',
                'Morbi tincidunt augue',
                'Duis ultricies lacus sed',
                'Imperdiet proin'
            ]
        }
    ];

    getCurrentPrice(plan: any): number {
        return this.isYearly() ? plan.yearlyPrice : plan.monthlyPrice;
    }

    getPricePeriod(): string {
        return this.isYearly() ? 'year' : 'month';
    }

    togglePricing() {
        this.isYearly.update(value => !value);
    }
}
