import { Component, OnInit, Input } from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  display:boolean=true;
  
  constructor() { }

  ngOnInit() {
  }

}
