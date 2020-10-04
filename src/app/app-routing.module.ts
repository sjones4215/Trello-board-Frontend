import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBoardComponent } from './add-board/add-board.component';
import { BoardPageComponent } from './board-page/board-page.component';
import { BoardsComponent } from './boards/boards.component';
import { RemoveBoardComponent } from './remove-board/remove-board.component';

const routes: Routes = [
  {path: '', component: BoardsComponent },
  {path: 'home', redirectTo:'', pathMatch:'full'},
  {path: 'board-page/:id', component: BoardPageComponent },
  {path: 'add-board', component: AddBoardComponent},
  {path: 'remove-board', component: RemoveBoardComponent},
  {path: 'board-page', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
