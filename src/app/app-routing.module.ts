import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationsDetailComponent } from './publications-detail/publications-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ResearchInterestsComponent } from './research-interests/research-interests.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'publications/detail/:id', component: PublicationsDetailComponent },
  { path: 'contact-us', component: ContactUsComponent },
  // { path: 'research-interests', component: ResearchInterestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
