import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/services/board.service';
import { Board } from '../models/board';

@Component({
  selector: 'app-remove-board',
  templateUrl: './remove-board.component.html',
  styleUrls: ['./remove-board.component.scss']
})
export class RemoveBoardComponent implements OnInit {

  boards: Board[] = []
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.getAllBoards().subscribe(data => {
      if(data)
    this.boards = data.boards;
    console.log(data)
  })
  }

  deleteBoard(id: number){
    this.boardService.deleteBoard(id).subscribe( data => {
      console.log(data)
    })
      debugger
    }
}
