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
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnimationComponent } from './animation/animation.component';
import { RouteComponent } from './route/route.component';
import { AuthComponent } from './auth/auth.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DateComponent } from './date/date.component';
import { AccountModule } from './lazy/account/account.module';
import { TemplateComponent } from './template/template.component';
import { NewsComponent } from './news/news.component';
import { PipescompComponent } from './pipescomp/pipescomp.component';
import { ScrollComponent } from './scroll/scroll.component';
import { UploadFotoComponent } from './upload-foto/upload-foto.component';
import { MaterialsTableComponent } from './materials-table/materials-table.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path:"" , component: ScrollComponent },
  {path:"reactive-form" , component: ReactiveFormComponent },
  {path:"table-materials" , component: MaterialsTableComponent },
  {path:"grid" , component: GridComponent },
  {path:"uploadFoto" , component: UploadFotoComponent },
  {path:"template" , component: TemplateComponent },
  {path:"scroll" , component: ScrollComponent },
  {path:"position" , component: PositionComponent },
  {path:"debug" , component: DebugComponent },
  {path:"async" , component: AsyncComponent },
  {path:"materials" , component: MaterialsComponent },
  {path:"gmail" , component: GmailComponent },
  {path:"git" , component: GitComponent },
  {path:"parent" , component: ParentComponent },
  {path:"child" , component: ChildComponent },
  {path:"questions" , component: QuestionsComponent },
  {path:"route" , component: RouteComponent },
  {path:"route/:id" , component: RouteComponent },
  {path:"animation" , component: AnimationComponent },
  {path:"auth" , component: AuthComponent },
  {path:"navigation" , component: NavigationComponent },
  {path:"date" , component: DateComponent },
  {path:"news" , component: NewsComponent },
  {path:"pipes" , component: PipescompComponent },
  {
    path:"pages",
    loadChildren: () => import('./lazy/account/account.module').then((m) => m.AccountModule) 
 },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
