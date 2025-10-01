import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'right-aligned-image',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    templateUrl: './right-aligned-image.html',
    styleUrl: './right-aligned-image.scss',
})
export class RightAlignedImage {}
