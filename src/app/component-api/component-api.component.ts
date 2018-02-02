import { Component, OnInit } from '@angular/core';

interface FavoriteChangedEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.css']
})
export class ComponentApiComponent implements OnInit {
  post = {
    title: 'Title',
    isFavorite: true
  };

  constructor() { }

  ngOnInit() {
  }

 /*  onFavoriteChanged(eventArgs) {
    console.log('Favorite Changed: ', eventArgs);
  }

  onFavoriteChanged(eventArgs: { newValue: boolean}) {
    console.log('Favorite Changed: ', eventArgs);
  } */

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite Changed: ', eventArgs);
  }

}
