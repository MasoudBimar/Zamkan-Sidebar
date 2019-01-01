import { Component, OnInit } from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  display:boolean=true;
  
  constructor() { }

  ngOnInit() {
  }

}
