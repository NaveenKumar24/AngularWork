import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { DemoComponent} from './demo/demo.component';


const routes: Routes = [
  {path: " ", component: DashboardComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "demo", component : DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
