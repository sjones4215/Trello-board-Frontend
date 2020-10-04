import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BoardPageComponent } from './board-page/board-page.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { RemoveBoardComponent } from './remove-board/remove-board.component';
import { ArchiveBoardComponent } from './archive-board/archive-board.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    HeaderComponent,
    FooterComponent,
    BoardPageComponent,
    AddBoardComponent,
    RemoveBoardComponent,
    ArchiveBoardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
