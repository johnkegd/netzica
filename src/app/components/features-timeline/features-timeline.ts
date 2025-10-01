import { Component } from '@angular/core';
import { ImportsModule } from '../../imports';

@Component({
  selector: 'app-features-timeline',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './features-timeline.html',
  styleUrl: './features-timeline.scss'
})
export class FeaturesTimelineComponent {
  timelineEvents = [
    {
      id: 1,
      title: 'Ornare Arcu Odio',
      description: 'Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/timeline-1.png',
      imageWidth: '23rem',
      color: 'var(--p-primary-color)',
      benefits: [
        {
          title: 'Sed lectus vestibulum',
          description: 'mattis ullamcorper velit. Laoreet sit amet cursus sit.'
        },
        {
          title: 'Fames ac turpis',
          description: 'egestas sed tempus urna et. Cursus turpis massa.'
        }
      ]
    },
    {
      id: 2,
      title: 'A diam maecenas',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/timeline-2.png',
      imageWidth: '14rem',
      color: 'var(--p-primary-color)',
      benefits: [
        {
          title: 'Quis hendrerit dolor',
          description: 'magna eget est. Pellentesque pulvinar pellentesque.'
        },
        {
          title: 'Lectus urna duis',
          description: 'convallis convallis tellus id interdum velit laoreet.'
        }
      ]
    },
    {
      id: 3,
      title: 'Pharetra et ultrices neque',
      description: 'Id interdum velit laoreet id. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/timeline-3.png',
      imageWidth: '25rem',
      color: 'var(--p-primary-color)',
      benefits: [
        {
          title: 'Egestas dui id',
          description: 'ornare arcu odio ut. Mi bibendum neque egestas congue.'
        },
        {
          title: 'Sed velit dignissim',
          description: 'sodales ut eu. Massa placerat duis ultricies lacus.'
        }
      ]
    }
  ];
}
