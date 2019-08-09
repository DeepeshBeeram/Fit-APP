import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training.component';
import { Routes } from '@angular/router';


export const appRoutes: Routes = [

    {path: '', redirectTo: '/login', pathMatch:'full'},
    {path: 'login', component: LoginComponent},

    {path: 'signup', component: SignupComponent},
    {path: 'training', component: TrainingComponent},

    {path: '**', redirectTo: '', pathMatch: 'full'}



];
