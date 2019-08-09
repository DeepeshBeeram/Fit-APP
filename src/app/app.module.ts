import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router';
import {MatFormFieldModule, 
  MatInputModule, MatIconModule, MatButtonModule, MatDatepickerModule,
   MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, 
   MatListModule, MatTabsModule, MatCardModule, MatProgressSpinnerModule, 
   MatDialogModule,
   MatSelectModule,
   MatTableModule,
   MatSortModule,
   MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { TrainingService } from './training/training.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    SidenavComponent,
    ToolbarComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,      
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule


  ],
  
  providers: [AuthService, AuthGuard, TrainingService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule { }
