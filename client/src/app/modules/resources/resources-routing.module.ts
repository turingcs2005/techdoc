import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { AzureComponent } from './azure/azure.component';
import { BackEndDebuggingComponent } from './back-end-debugging/back-end-debugging.component';
import { BashComponent } from './bash/bash.component';
import { CrossTrainingComponent } from './cross-training/cross-training.component';
import { DockerComponent } from './docker/docker.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { EmojiComponent } from './emoji/emoji.component';
import { FrontEndDebuggingComponent } from './front-end-debugging/front-end-debugging.component';
import { GitComponent } from './git/git.component';
import { NodejsNpmComponent } from './nodejs-npm/nodejs-npm.component';
import { Pm2Component } from './pm2/pm2.component';
import { RefactoringComponent } from './refactoring/refactoring.component';
import { ResourcesComponent } from './resources.component';
import { VimComponent } from './vim/vim.component';
import { VisualStudioCodeComponent } from './visual-studio-code/visual-studio-code.component';

const routes: Routes = [
  { path: '', component: ResourcesComponent },
  { path: 'visual-studio-code', component: VisualStudioCodeComponent },
  { path: 'vim', component: VimComponent },
  { path: 'git', component: GitComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'nodejs-npm', component: NodejsNpmComponent },
  { path: 'azure', component: AzureComponent },
  { path: 'emoji', component: EmojiComponent },
  { path: 'pm2', component: Pm2Component },
  { path: 'bash', component: BashComponent },
  { path: 'docker', component: DockerComponent },
  { path: 'refactoring', component: RefactoringComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'cross-training', component: CrossTrainingComponent },
  { path: 'front-end-debugging', component: FrontEndDebuggingComponent },
  { path: 'back-end-debugging', component: BackEndDebuggingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
