import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoardData } from '../app/models/board_data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) {}

  getAllBoards(): Observable<BoardData>{
    return this.http.get<BoardData>(this.baseUrl + 'boards/index')
  }
}
