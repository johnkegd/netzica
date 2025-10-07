import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-branded-banner',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './branded-banner.html',
  styleUrl: './branded-banner.scss'
})
export class BrandedBannerComponent {
  @Input() backgroundImage: string = 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/cta-8.jpg';
  @Input() title: string = 'Discover Elegancy';
  @Input() description: string = 'Blandit massa enim nec dui nunc mattis. Nisi lacus sed viverra tellus in hac habitasse platea. Accumsan tortor posuere ac ut consequat semper viverra nam.';
  @Input() primaryButtonText: string = 'Learn More';
  @Input() secondaryButtonText: string = 'Live Demo';

  get backgroundStyle(): string {
    return `linear-gradient(90deg, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.9) 68.93%), radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 70%)`;
  }
}
