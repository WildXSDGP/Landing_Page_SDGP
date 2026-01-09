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
    { name: 'B. Malshan', role: 'Project Manager', img: 'team/member1.jpg' },
    { name: 'N. Silva', role: 'Frontend Developer', img: 'assets/team/2.jpg' },
    { name: 'M. Fernando', role: 'Backend Engineer', img: 'assets/team/3.jpg' },
    { name: 'S. Jayasinghe', role: 'UI/UX Designer', img: 'assets/team/4.jpg' },
    { name: 'R. Wickramasinghe', role: 'AI Specialist', img: 'assets/team/5.jpg' },
    { name: 'K. Gunawardena', role: 'Data Analyst', img: 'assets/team/6.jpg' }
  ];

}
