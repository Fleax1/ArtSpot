import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Item} from '../types';
import {ItemService} from '../item.service';
import { IonicStorageModule } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
itemList: Observable<Item[]>;
// favorites = [];

  constructor(itemService: ItemService) {
    this.itemList = itemService.getItems();
  }
  // favorite(item) {
  //   this.favorites.push(item);
  // }

}
