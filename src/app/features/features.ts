import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-features',
  imports: [CardModule,ButtonModule],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {

  features = [
  { icon: 'pi pi-map',           title: 'Interactive Map',   description: 'View safari trails & animal zones' },
  { icon: 'pi pi-cog',           title: 'AI Predictions',    description: 'Suggests best animal viewing times' },
  { icon: 'pi pi-wifi-off',      title: 'Offline Mode',      description: 'Works even with no signal' },
  { icon: 'pi pi-exclamation-triangle', title: 'SOS Support', description: 'One-tap emergency alert' },
  { icon: 'pi pi-camera',        title: 'Wildlife Gallery',  description: 'View & tag safari photos' },
  { icon: 'pi pi-car',           title: 'Safari Booking',    description: 'Book certified jeep drivers' }
];


}
