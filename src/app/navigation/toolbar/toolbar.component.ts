import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() sideNavToggle = new EventEmitter<void>();

  authSubcribe: Subscription;
  isAuth = false;
  constructor(private authSer: AuthService) { }

  ngOnInit() {
    this.authSubcribe = this.authSer.authChange.subscribe(result => {
      this.isAuth = result;
    });
  }

  onToggle(){
    this.sideNavToggle.emit();

  }

  
  ngOnDestroy() {
    this.authSubcribe.unsubscribe();
  }

  onLogout(){
    this.authSer.logout();
  }

}
