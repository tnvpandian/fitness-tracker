import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output('sidenavToggle') sidenavToggle = new EventEmitter<void>();
  constructor() { 

   }
  
  onToggleSideNav() {
    this.sidenavToggle.emit();
  }
  ngOnInit() {
  }

}
