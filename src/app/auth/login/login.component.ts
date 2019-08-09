import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuth= false;
  constructor(private authSer: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authSer.login({
      email: form.value.email,
      password: form.value.password
    });
  


  }


}
