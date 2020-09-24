import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board';
import { BoardService } from 'src/services/board.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  boards: Board[] = [ ]
  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit(): void {
      this.boardService.getAllBoards().subscribe(data => {
        if(data)
        this.boards = data.boards;
        console.log(data)
      })
    }
  }
