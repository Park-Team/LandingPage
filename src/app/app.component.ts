import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopButtonComponent } from './components/scroll-top-button/scroll-top-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    HeroComponent, 
    InfoSectionComponent, 
    FeaturesComponent, 
    TestimonialsComponent, 
    PricingComponent, 
    AboutComponent, 
    FooterComponent,
    ScrollTopButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EzPark';
}
