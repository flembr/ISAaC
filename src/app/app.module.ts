import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { SummaryComponent } from './summary/summary.component';
import { WelcomeComponent } from './welcome/welcome.component';

// set routes to components
const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'course-search', component: CourseSearchComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CourseSearchComponent,
    SummaryComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
