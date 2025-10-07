import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-3d-emoji',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './hero-3d-emoji.html',
  styleUrl: './hero-3d-emoji.scss'
})
export class Hero3dEmojiComponent {
  @Input() badge: string = 'MULTIPLY YOUR DEVELOPMENT SPEED';
  @Input() title: string = 'Start your business with';
  @Input() highlight: string = 'PrimeBlocks';
  @Input() primaryButtonText: string = 'Pricing';
  @Input() secondaryButtonText: string = 'Documentation';
  @Input() secondaryButtonVisible: boolean = true;
}
