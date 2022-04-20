import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { VisualStudioCodeComponent } from './visual-studio-code/visual-studio-code.component';
import { AngularComponent } from './angular/angular.component';
import { NodejsNpmComponent } from './nodejs-npm/nodejs-npm.component';
import { AzureComponent } from './azure/azure.component';
import { EmojiComponent } from './emoji/emoji.component';
import { SharedModule } from '../shared/shared.module';
import { Pm2Component } from './pm2/pm2.component';
import { VimComponent } from './vim/vim.component';
import { BashComponent } from './bash/bash.component';
import { DockerComponent } from './docker/docker.component';
import { RefactoringComponent } from './refactoring/refactoring.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { CrossTrainingComponent } from './cross-training/cross-training.component';


@NgModule({
  declarations: [
    ResourcesComponent,
    VisualStudioCodeComponent,
    AngularComponent,
    NodejsNpmComponent,
    AzureComponent,
    EmojiComponent,
    Pm2Component,
    VimComponent,
    BashComponent,
    DockerComponent,
    RefactoringComponent,
    DocumentationComponent,
    CrossTrainingComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    SharedModule
  ]
})
export class ResourcesModule { }
