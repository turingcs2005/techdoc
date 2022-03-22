import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { AzureComponent } from './azure/azure.component';
import { BashComponent } from './bash/bash.component';
import { EmojiComponent } from './emoji/emoji.component';
import { NodejsNpmComponent } from './nodejs-npm/nodejs-npm.component';
import { Pm2Component } from './pm2/pm2.component';
import { ResourcesComponent } from './resources.component';
import { VimComponent } from './vim/vim.component';
import { VisualStudioCodeComponent } from './visual-studio-code/visual-studio-code.component';

const routes: Routes = [
  { path: '', component: ResourcesComponent },
  { path: 'visual-studio-code', component: VisualStudioCodeComponent },
  { path: 'vim', component: VimComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'nodejs-npm', component: NodejsNpmComponent },
  { path: 'azure', component: AzureComponent },
  { path: 'emoji', component: EmojiComponent },
  { path: 'pm2', component: Pm2Component },
  { path: 'bash', component: BashComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
