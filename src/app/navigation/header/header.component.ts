import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output('sidenavToggle') sidenavToggle = new EventEmitter<void>();
  isAuth: boolean = false;
  authSvcSubscription: Subscription;
  constructor(private authService: AuthService) {

  }

  onToggleSideNav() {
    this.sidenavToggle.emit();
  }
  ngOnInit() {
    this.authSvcSubscription = this.authService.authChange.subscribe((authstatus) => {
      this.isAuth = authstatus;
    });
  }
  onLogout() {
    this.authService.logout();
  }
  ngOnDestroy() {
    this.authSvcSubscription.unsubscribe();
  }

}
