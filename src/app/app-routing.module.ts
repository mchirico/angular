import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeptaComponent} from './septa/septa.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataDetailComponent} from './data-detail/data-detail.component';
import {MapComponent} from './map/map.component';
import {ItemComponent} from './item/item.component';
import {SimpleFormComponent} from './simple-form/simple-form.component';

import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {path: 'heroes', component: SeptaComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'map', component: MapComponent},
  {path: 'item', component: ItemComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'simpleForm', component: SimpleFormComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: DataDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
