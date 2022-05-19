import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SoftwareComponent } from './software/software.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IntroductionComponent,
    TechnologiesComponent,
    SoftwareComponent,
    ProgrammingLanguagesComponent
  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    SharedModule
  ]
})
export class IntroductionModule { }
