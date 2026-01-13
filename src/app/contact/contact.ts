import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-contact',
  imports: [CardModule,ButtonModule,NgFor],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  wildx={
    email:'wildxsdgp@gmail.com',
    github:'https://github.com/WildXSDGP'
  };

  teamContacts = [
    { name: 'S. Ransika', role: 'Project Manager', phone: '+94 77 123 4567' },
    { name: 'T. Muthukumarana', role: 'Frontend Developer', phone: '+94 71 234 5678' },
    { name: 'B. Malshan', role: 'Backend Engineer', phone: '+94 75 345 6789' },
    { name: 'D. Wanniarachchi', role: 'UI/UX Designer', phone: '+94 78 456 7890' },
    { name: 'M.Ranaweera', role: 'AI Specialist', phone: '+94 72 567 8901' },
    { name: 'M. Lokuge', role: 'Data Analyst', phone: '+94 76 678 9012' }
  ];

  openGitHub() {
    window.open(this.wildx.github, '_blank');
  }

  sendMail() {
    window.location.href = `mailto:${this.wildx.email}`;
  }



}
