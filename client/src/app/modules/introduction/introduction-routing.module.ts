import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { SoftwareComponent } from './software/software.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'programming-languages', component: ProgrammingLanguagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionRoutingModule { }
