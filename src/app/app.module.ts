import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
import { BelieveComponent } from './believe/believe.component';
import { RecommendComponent } from './recommend/recommend.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { SoftwareServicesComponent } from './software-services/software-services.component';
import { HeaderComponent } from './header/header.component';
import { RootComponent } from './root/root.component';
import { MainComponent } from './main/main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { RootPortfolioPageComponent } from './root-portfolio/root-portfolio.component';
import { HrmsComponent } from './hrms/hrms.component';
import { LmsComponent } from './lms/lms.component';
import { CrmsComponent } from './crms/crms.component';
import { MsComponent } from './ms/ms.component';
import { WebsiteDesignComponent } from './website-design/website-design.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeV2Component } from './home-v2/home-v2.component';
import { DatePipe } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { SwiperModule } from 'swiper/types';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiceComponent,
    BelieveComponent,
    RecommendComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent,
    HomeComponent,
    ClientsComponent,
    SoftwareServicesComponent,
    HeaderComponent,
    RootComponent,
    MainComponent,
  
    RootPortfolioPageComponent,
    HrmsComponent,
    LmsComponent,
    CrmsComponent,
    MsComponent,
    WebsiteDesignComponent,
    DigitalMarketingComponent,
    NewsComponent,
    AboutUsComponent,
    HomeV2Component,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DatePipe,
    SlickCarouselModule,
    FontAwesomeModule
   
 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
