import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroContentComponent } from './intro-content/intro-content.component';
import { LoginComponent } from './login/login.component';
import { BenefitComponent } from './benefit/benefit.component';
import { FooterComponent } from './footer/footer.component';
import { BenefitLoginComponent } from './login/benefit-login/benefit-login.component';
import { PublicLoginComponent } from './login/public-login/public-login.component';
import { HeaderLoginComponent } from './login/header-login/header-login.component';
import { MainFeaturesComponent } from './main-features/main-features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroContentComponent,
    LoginComponent,
    BenefitComponent,
    FooterComponent,
    BenefitLoginComponent,
    PublicLoginComponent,
    HeaderLoginComponent,
    MainFeaturesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
