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
    { label: 'Home', icon: 'pi pi-home',routerLink:['/'] },
    { label: 'About', icon: 'pi-megaphone',items: [
                    {
                        label: 'Team',
                       routerLink:['/about/team']
                    },
                    {
                        label: 'WildX',
                        routerLink:['/about/wildx']
                    }
                ] },
    { label: 'Features', icon: 'pi pi-briefcase',routerLink:['/features'] },
    { label: 'Contact', icon: 'pi pi-envelope',routerLink:['/contact'] }
  ];


  }



}
