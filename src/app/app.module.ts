import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BenefitComponent } from './benefit/benefit.component';
import { FooterComponent } from './footer/footer.component';
import { BenefitLoginComponent } from './login/benefit-login/benefit-login.component';
import { PublicLoginComponent } from './login/public-login/public-login.component';
import { HeaderLoginComponent } from './login/header-login/header-login.component';
import { MainFeaturesComponent } from './main-features/main-features.component';
import { HomeComponent } from './home/home.component';
import { ContributionComponent } from './contribution/contribution.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ListenComponent } from './contribution/listen/listen.component';
import { HttpClientModule } from '@angular/common/http';
import { RecordComponent } from './contribution/record/record.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './auth.service';
import { BackgroundDirective } from './background.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BenefitComponent,
    FooterComponent,
    BenefitLoginComponent,
    PublicLoginComponent,
    HeaderLoginComponent,
    MainFeaturesComponent,
    HomeComponent,
    ContributionComponent,
    AboutComponent,
    ListenComponent,
    RecordComponent,
    SignupComponent,
    SigninComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
