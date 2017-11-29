import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarktenComponent } from './markten/markten.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'markten', component: MarktenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }