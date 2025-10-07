import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'animal-made-footer',
  imports: [CommonModule, ButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }

}
