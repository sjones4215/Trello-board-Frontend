import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/services/board.service';
import { Board } from '../models/board';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {

  newBoard: Board = new Board();

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
  }

  createBoard() {
    this.boardService.createBoard(this.newBoard).subscribe(data => {
    });
  }

}
