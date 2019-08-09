import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authSer: AuthService,private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authSer.isAuth()) {
            return true;

        } else{
            this.router.navigate(['/login']);
        }
    }

}