import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../../services/board.service'
import { Board } from '../models/board'
import { BoardData } from '../models/board_data';
import { Card } from '../models/card';
import { Post } from '../models/post';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  board: Board = null
  cards: Card[] = []


  constructor(private boardService: BoardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id)
      this.boardService.getABoard(params.id).subscribe(boardData => {
        this.board = boardData.board
        this.cards = boardData.cards
        console.log(boardData)
      })
    })
  }
}
