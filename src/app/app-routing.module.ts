import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},
  //portifolio
  //portifolio/1
  //portifolio/1/token
  {path:'portifolio', component: CardComponent, children:[
    {path:':id', component: CardComponent, pathMatch:'prefix'},
    {path:':id/:token', component: CardComponent},

  ]},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
