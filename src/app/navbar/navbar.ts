import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [Menubar,MenubarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    
    this.items = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'About', icon: 'pi-megaphone',items: [
                    {
                        label: 'Team',
                        url: 'http://localhost:4200/team'
                    },
                    {
                        label: 'WildX',
                        url: 'http://localhost:4200/**'
                    }
                ] },
    { label: 'Features', icon: 'pi pi-briefcase' },
    { label: 'Contact', icon: 'pi pi-envelope' }
  ];


  }



}
