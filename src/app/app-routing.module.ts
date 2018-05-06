import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeptaComponent} from './septa/septa.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataDetailComponent} from './data-detail/data-detail.component';


const routes: Routes = [
  {path: 'heroes', component: SeptaComponent},
  {path: 'dashboard', component: DashboardComponent},
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
