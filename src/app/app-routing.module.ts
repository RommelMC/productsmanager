import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProdlistComponent} from './prodlist/prodlist.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
const routes: Routes = [
  {path:'', pathMatch: 'full', component: HomeComponent},
  {path:'products', pathMatch: 'full', component: ProdlistComponent},
  {path:'products/edit/:id', pathMatch: 'full', component: EditComponent},
  {path:'products/new', pathMatch: 'full', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
