import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WhiteBoardComponent } from './white-board/white-board.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'white-board', component: WhiteBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
