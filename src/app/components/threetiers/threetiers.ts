import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'three-tiers',
    standalone: true,
    imports: [CommonModule, ButtonModule, ToggleSwitchModule, FormsModule, BadgeModule],
    templateUrl: './threetiers.html',
})
export class ThreeTiers {
    isYearly = signal(false);
    
    pricingPlans = [
        {
            name: 'Basic',
            description: 'Ideal for small businesses and personal websites.',
            monthlyPrice: 9,
            yearlyPrice: 108,
            features: [
                '10 GB SSD Storage',
                'Unlimited Bandwidth',
                'Free SSL Certificate',
                'WordPress Installation',
                '24/7 Support',
                '99.9% Uptime Guarantee',
                'Free Domain (1st year)'
            ]
        },
        {
            name: 'Premium',
            description: 'For growing businesses with more complex needs.',
            monthlyPrice: 29,
            yearlyPrice: 348,
            features: [
                '100 GB SSD Storage',
                'Unlimited Bandwidth',
                'Free SSL Certificate',
                'WordPress Installation',
                'Priority Support',
                '99.9% Uptime Guarantee',
                'Free Domain (1st year)'
            ]
        },
        {
            name: 'Enterprise',
            description: 'For large enterprises and organizations with complex needs.',
            monthlyPrice: 49,
            yearlyPrice: 588,
            features: [
                '1TB SSD Storage',
                'Unlimited Bandwidth',
                'Free SSL Certificate',
                'Managed WordPress',
                'Dedicated Support',
                '99.9% Uptime Guarantee',
                'Multiple Domains'
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
