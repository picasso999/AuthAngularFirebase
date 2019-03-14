import { AngularFireAuthModule } from '@angular/fire/auth';
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// App components
import { AppComponent } from './app.component';
// App routing modules
import { AppRoutingModule1 } from './Auth_1/shared/routing/app-routing.module';
// Auth service
import { AuthService } from './Auth_1/shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule1,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }



