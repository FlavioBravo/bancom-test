import { Component } from '@angular/core';
import { Feature } from '../models/feature';

@Component({
  selector: 'app-achievement-section',
  templateUrl: './achievement-section.component.html',
  styleUrls: ['./achievement-section.component.scss']
})
export class AchievementSectionComponent {
  achievementList: Array<Feature> = [
    {
      src: './assets/featureicon.png',
      title: '10,000+',
      text: 'Downloads per day'
    },
    {
      src: './assets/featureicon3.png',
      title: '2 Million',
      text: 'Users'
    },
    {
      src: './assets/featureicon4.png',
      title: '500+',
      text: 'Clients'
    },
    {
      src: './assets/featureicon6.png',
      title: '140',
      text: 'Countries.'
    }
];
}
