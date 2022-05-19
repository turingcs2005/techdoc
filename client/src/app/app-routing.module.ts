import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'examples', loadChildren: () => import('./modules/examples/examples.module').then(m => m.ExamplesModule) },
  { path: 'introduction', loadChildren: () => import('./modules/introduction/introduction.module').then(m => m.IntroductionModule) },
  { path: 'resources', loadChildren: () => import('./modules/resources/resources.module').then(m => m.ResourcesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
