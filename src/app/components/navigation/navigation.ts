import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ImportsModule } from '../../imports';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [ImportsModule],
    templateUrl: './navigation.html',
    styleUrl: './navigation.scss',
})
export class NavigationComponent implements OnInit {
    items: MenuItem[] | undefined;
    mobileMenuOpen = signal(false);

    ngOnInit() {
        this.items = [
            {
                label: 'Products',
                items: [
                    {
                        label: 'Features',
                        icon: 'pi pi-th-large',
                    },
                    {
                        label: 'Solutions',
                        icon: 'pi pi-microchip',
                    },
                    {
                        label: 'Customers',
                        icon: 'pi pi-users',
                    },
                    {
                        label: 'Support',
                        icon: 'pi pi-lightbulb',
                        items: [
                            {
                                label: 'Help Center',
                                icon: 'pi pi-user',
                            },
                            {
                                label: 'FAQ',
                                icon: 'pi pi-question-circle',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Corporate',
            },
            {
                label: 'Resources',
            },
            {
                label: 'Pricing',
            },
        ];
    }

    toggleMobileMenu() {
        this.mobileMenuOpen.update(open => !open);
    }
}