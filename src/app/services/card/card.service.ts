import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../../models/card.model';


@Injectable({ providedIn: 'root' })
export class CardService {
  private base = 'https://crud-cards-app.onrender.com/cards';
  constructor(private http: HttpClient) { }


  getAll(): Observable<Card[]> {
    return this.http.get<Card[]>(this.base);
  }


  delete(id: number) {
    console.log('Deleting:', `${this.base}/${id}`);

    return this.http.delete(`${this.base}/${id}`);
  }


  create(card: Card) {
    return this.http.post<Card>(this.base, card);
  }
}