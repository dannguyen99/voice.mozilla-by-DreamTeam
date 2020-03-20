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
import { HomeComponent } from './home/home.component';
import { ContributionComponent } from './contribution/contribution.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { LogComponent } from './log/log.component';
import { WebAudioRecorderComponent } from './web-audio-recorder/web-audio-recorder.component';

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
    HomeComponent,
    ContributionComponent,
    AboutComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
