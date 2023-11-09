import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: RegisterPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'profile/:email', component: ProfilePageComponent },
  { path: 'email-confirmation/:email', component: EmailConfirmationComponent },
  { path: '**', redirectTo: '', component: RegisterPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    EmailConfirmationComponent,
    ProfilePageComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
