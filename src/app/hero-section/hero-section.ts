import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [CardModule,ButtonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

  private router=inject(Router);

  navigateTo(route:String):void{
    this.router.navigate([route]);
  }
  

}
