import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output('closeSideNav') sidenavToggle = new EventEmitter<void>();
  isAuth: boolean = false;
  authSubscription: Subscription;
  constructor(private authService: AuthService) { }
  onToggleSideNav() {
    this.sidenavToggle.emit();
  }
  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }
  onLogOut() {
    this.onToggleSideNav();
    this.authService.logout();
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
