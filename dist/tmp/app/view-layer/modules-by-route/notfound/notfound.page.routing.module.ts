import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundPageComponent } from './notfound.page.component';

const routes: Routes = [
  {  path: '**',
     component: NotfoundPageComponent
  }
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class NotfoundPageRoutingModule { }
