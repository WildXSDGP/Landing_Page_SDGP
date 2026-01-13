import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-team-page',
  imports: [CardModule,ButtonModule, NgFor],
  templateUrl: './team-page.html',
  styleUrl: './team-page.css',
})
export class TeamPage {

  team = [
    { name: 'S. Ransika', role: 'Project Manager', img: 'team/member1.jpeg' },
    { name: 'T. Muthukumarana', role: 'Frontend Developer', img: 'team/member2.jpeg' },
    { name: 'B. Malshan', role: 'Backend Engineer', img: 'team/member3.jpg' },
    { name: 'D. Wanniarachchi', role: 'UI/UX Designer', img: 'team/member4.jpeg' },
    { name: 'M. Ranaweera', role: 'AI Specialist', img: 'team/member5.jpg' },
    { name: 'M. Lokuge', role: 'Data Analyst', img: 'team/member6.jpg' }
  ];

}
