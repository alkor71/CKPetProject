import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PCComponent } from './PC/PC.component';
import { PLayStationComponent } from './PlayStation/PlayStation.component';
import { XBoxComponent } from './X-Box/X-Box.component';

const routes: Routes = [
  {path: 'PC', component: PCComponent},
  {path: 'PlayStation', component: PLayStationComponent},
  {path: 'X-Box', component: XBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }