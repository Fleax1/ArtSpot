import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Item} from "./types";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }
  getItem(itemId: string): Observable<Item> {
    return this.httpClient.get<Item>(API + "/" + itemId);
  }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(API);
  }
}

// const API = "http://localhost:3000/item";
const API = "http://json-server.typicode/Fleax1/ArtSpot/item";
