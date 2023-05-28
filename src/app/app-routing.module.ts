import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
  // {path:"" , component: AppComponent },
  {path:"grid" , component: GridComponent },
  {path:"position" , component: PositionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
