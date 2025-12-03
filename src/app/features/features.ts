import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [CardModule,ButtonModule,NgFor],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {

  features = [
    { icon: 'pi pi-map', name: 'Interactive Map', description: 'View safari trails & animal zones' },
    { icon: 'pi pi-warehouse', name: 'Accommadation Details', description: 'Best accommodation nearby national park' },
    { icon: 'pi pi-sort-alt-slash', name: 'Offline Mode', description: 'Works even with no signal' },
    { icon: 'pi pi-exclamation-triangle', name: 'SOS Support', description: 'One-tap emergency alert' },
    { icon: 'pi pi-camera', name: 'Wildlife Gallery', description: 'View & tag safari photos' },
    { icon: 'pi pi-car', name: 'Safari Booking', description: 'Book certified jeep drivers' }
  ];


}
