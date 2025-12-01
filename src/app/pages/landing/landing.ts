import { Component } from '@angular/core';
import { HeroSection } from '../../hero-section/hero-section';
import { Features } from '../../features/features';

@Component({
  selector: 'app-landing',
  imports: [HeroSection,Features],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
