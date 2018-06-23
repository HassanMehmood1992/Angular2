import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-details/hero-details.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { OverviewComponent } from './overview/overview.component';


const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'overview',
    component: OverviewComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    PageNotFoundComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    OverviewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
