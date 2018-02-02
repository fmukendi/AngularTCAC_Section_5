import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  // , template
  styleUrls: ['./favorite.component.css']
  // , encapuslation : ViewEncapsulation.Emulated // --> SHADOW DOM
  // , inputs : ['isFavorite']
  // , styles : [
  //  `
  //  .glyphicon { color: green }
  //  `
  // ]
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  // @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter();
  // @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    // this.change.emit(this.isFavorite);
    this.change.emit({newValue : this.isFavorite});
  }

}
