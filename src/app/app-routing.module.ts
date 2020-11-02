import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentcompComponent } from './parentcomp/parentcomp.component';

const routes: Routes = [
  {path:'',component:ParentcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
