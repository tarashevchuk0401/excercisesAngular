import { DebugElement, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { DebugComponent } from './debug/debug.component';
import { AsyncPipe } from '@angular/common';
import { AsyncComponent } from './async/async.component';
import { MaterialsComponent } from './materials/materials.component';
import { GmailComponent } from './gmail/gmail.component';
import { GitComponent } from './git/git.component';

const routes: Routes = [
  // {path:"" , component: AppComponent },
  {path:"grid" , component: GridComponent },
  {path:"position" , component: PositionComponent },
  {path:"debug" , component: DebugComponent },
  {path:"async" , component: AsyncComponent },
  {path:"materials" , component: MaterialsComponent },
  {path:"gmail" , component: GmailComponent },
  {path:"git" , component: GitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
