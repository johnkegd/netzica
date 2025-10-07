import { Component, signal, HostListener } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
    title?: string;
    description?: string;
    benefits?: Array<{title: string, description: string}>;
    imageWidth?: string;
    id?: string;
}

@Component({
    selector: 'app-features-timeline',
    templateUrl: './features-timeline.html',
    styleUrl: './features-timeline.scss',
    standalone: true,
    imports: [Timeline, CardModule, ButtonModule]
})
export class FeaturesTimelineComponent {
    events: EventItem[];
    isDesktop = signal(window.innerWidth > 768);

    constructor() {
        this.events = [
            { 
                status: 'Ordered', 
                date: '15/10/2020 10:30', 
                icon: 'pi pi-shopping-cart', 
                color: '#9C27B0', 
                title: 'Web & Domains',
                description: 'Integrated with all the leading web hosting control panels and domain registrars for automatic provisioning and management.',
                benefits: [
                    { title: 'Real-time tracking', description: 'Monitor webs in real-time' },
                    { title: 'Automated workflows', description: 'Reduce manual processing time' }
                ],
                imageWidth: '300px',
                id: '1'
            },
            { 
                status: 'Processing', 
                date: '15/10/2020 14:00', 
                icon: 'pi pi-cog', 
                color: '#673AB7',
                title: 'Secure & Scalable',
                description: 'High-performance servers with advanced security features and scalable infrastructure to handle your growing traffic.',
                benefits: [
                    { title: 'AI-powered insights', description: 'Get actionable business insights' },
                    { title: 'Scalable infrastructure', description: 'Grows with your business' }
                ],
                imageWidth: '300px',
                id: '2'
            },
            { 
                status: 'Shipped', 
                date: '15/10/2020 16:15', 
                icon: 'pi pi-truck', 
                color: '#FF9800',
                title: 'Developer Friendly',
                description: 'Easy to integrate with your existing tools and workflows, and our API allows you to automate your web hosting and domain management.',
                benefits: [
                    { title: 'API access', description: 'Integrate with your existing tools' },
                    { title: 'Developer tools', description: 'Easy to integrate with your existing tools and workflows' }
                ],
                imageWidth: '300px',
                id: '3'
            },
            { 
                status: 'Delivered', 
                date: '16/10/2020 10:00', 
                icon: 'pi pi-check', 
                color: '#607D8B',
                title: 'Reliable Support',
                description: '24/7 customer support to help you with any issues or questions you may have.',
                benefits: [
                    { title: '24/7 support', description: 'Get help anytime' },
                    { title: 'Knowledge base', description: 'Find answers to your questions' }
                ],
                imageWidth: '300px',
                id: '4'
            }
        ];
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.isDesktop.set(window.innerWidth > 768);
    }
}