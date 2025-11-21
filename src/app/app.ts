import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './navbar/navbar';
import { HeroSection } from './hero-section/hero-section';
import { Features } from './features/features';
import { PageNotFound } from './page-not-found/page-not-found';
import { TeamPage } from './team-page/team-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,HeroSection,Features,PageNotFound,TeamPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Landing_Page');
}
