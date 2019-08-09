import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {
  
 @Output() sideNavClose = new EventEmitter<void> ();
  isAuth = false;
  authSubscribe : Subscription;

  constructor(private authSer: AuthService) { }

  ngOnInit() {
    this.authSer.authChange.subscribe(result =>{
      this.isAuth = result;
    })
  }

  onClose() {
    this.sideNavClose.emit();



  }

  ngOnDestroy() {
   this.authSubscribe.unsubscribe();
  }

  onLogout() {
    this.onClose();
    this.authSer.logout();
  }


}
