import { Component, OnInit } from '@angular/core';
import {Nums} from "../nums.model";
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {Change, Decrease, Increase} from "../redux/nums.action";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public nums: Nums;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onChange() {
    setInterval( () => {
      this.store.dispatch(new Change());
    }, 1000 );

  }

  onIncrease(){
    this.store.dispatch(new Increase());
  }

  onDecrease(){
    this.store.dispatch(new Decrease());
  }

}
