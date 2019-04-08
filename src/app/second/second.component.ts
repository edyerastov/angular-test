import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Num} from "../nums.model";
import {AppState} from "../redux/app.state";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  public nums: Num[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('numPage').subscribe( d => {
      this.nums = d.nums;
      console.log(d);
    })
  }

}
