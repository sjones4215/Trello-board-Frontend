import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardData } from '../app/models/board_data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Board } from 'src/app/models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) {}

  getABoard(id: number): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'boards/show?id=' + id)
  }

  getAllBoards(): Observable<BoardData>{
    return this.http.get<BoardData>(this.baseUrl + 'boards/index')
  }

  createBoard(board: Board){
    return this.http.post(this.baseUrl + 'boards/create', board)
  }

  deleteBoard(id: number): Observable<any>{
    return this.http.delete<any>(this.baseUrl + 'boards/destroy?id=' + id)
  }
}
