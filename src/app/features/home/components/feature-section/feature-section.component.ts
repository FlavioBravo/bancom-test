import { Component } from '@angular/core';
import { Feature } from '../models/feature';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss']
})
export class FeatureSectionComponent {

  featureList: Array<Feature> = [
    {
      src: './assets/featureicon.png',
      title: 'Robust workflow',
      text: 'Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
      src: './assets/featureicon1.png',
      title: 'Flexibility',
      text: 'Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
      src: './assets/featureicon2.png',
      title: 'User friendly',
      text: 'Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
      src: './assets/featureicon3.png',
      title: 'Multiple layouts',
      text: 'Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
      src: './assets/featureicon4.png',
      title: 'Better components',
      text: 'Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
      src: './assets/featureicon5.png',
      title: 'Well organised',
      text: 'Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit. Sed erat nibh tristique ipsum.'
    }
];

}
