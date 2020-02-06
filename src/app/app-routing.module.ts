import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './nav/main/main.component';
import {OneComponent} from './nav/one/one.component';
import {TwoComponent} from './nav/two/two.component';
import {ThreeComponent} from './nav/three/three.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'one', component: OneComponent},
  { path: 'two', component: TwoComponent},
  { path: 'three', component: ThreeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]


})
export class AppRoutingModule {

}
