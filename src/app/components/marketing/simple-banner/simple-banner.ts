import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'simple-banner',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    templateUrl: './simple-banner.html',
    styleUrl: './simple-banner.scss'
})
export class SimpleBanner {}
