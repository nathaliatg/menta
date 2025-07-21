import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    HeaderComponent,
    HeroComponent,  
    PlanListComponent, 
    ContactComponent,  
    FooterComponent   
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marlin-odontologico';
}