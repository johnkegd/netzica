import { Component, OnInit, signal } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { ImportsModule } from '../../imports';
@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [ImportsModule, RouterModule],
    templateUrl: './navigation.html',
    styleUrl: './navigation.scss',
})
export class NavigationComponent implements OnInit {
    items: MenuItem[] | undefined;
    megaMenuItems: MegaMenuItem[] | undefined;
    mobileMenuOpen = signal(false);

    ngOnInit() {
        this.items = [
            {
                label: 'Products',
                items: [
                    {
                        label: 'Features',
                        icon: 'pi pi-th-large',
                        routerLink: '/products',
                    },
                    {
                        label: 'Solutions',
                        icon: 'pi pi-microchip',
                        routerLink: '/solutions',
                    },
                    {
                        label: 'Customers',
                        icon: 'pi pi-users',
                        routerLink: '/products',
                    },
                    {
                        label: 'Support',
                        icon: 'pi pi-lightbulb',
                        items: [
                            {
                                label: 'Help Center',
                                icon: 'pi pi-user',
                                routerLink: '/support',
                            },
                            {
                                label: 'FAQ',
                                icon: 'pi pi-question-circle',
                                routerLink: '/faq',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Corporate',
                routerLink: '/corporate',
            },
            {
                label: 'Pricing',
                routerLink: '/pricing',
            },
        ];
    }

    toggleMobileMenu() {
        this.mobileMenuOpen.update(open => !open);
    }
}