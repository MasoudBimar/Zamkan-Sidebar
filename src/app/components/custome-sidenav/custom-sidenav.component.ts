import { Component, computed, Input, signal } from '@angular/core';
import { MenuItem } from '../../model/menu-item.model';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, CommonModule, MatIconModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal<boolean>(false);
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }
  menuItems = signal<MenuItem[]>([
    {
      icon:"dashboard",
      label:"Dashboard",
      route: 'dashboard'
    },
    {
      icon:"video_library",
      label:"Content",
      route: 'content'
    },
    {
      icon:"analytics",
      label:"Analytics",
      route: 'analytics'
    },
    {
      icon:"comment",
      label:"Comments",
      route: 'comments'
    },

  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100')
}
