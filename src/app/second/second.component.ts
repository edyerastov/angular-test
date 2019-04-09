import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Nums} from "../nums.model";
import {AppState} from "../redux/app.state";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  public nums: Nums;
  public num1Border: boolean;
  public num2Border: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('numPage').subscribe( d => {
      this.nums = d;
      if (this.nums.num1 < 0) {
        document.getElementById('num1').style.cssText = "border-color: red; color: red";
      } else {
        document.getElementById('num1').style.cssText = "border-color: #0395ff; color: #0395ff";
      }

      if (this.nums.num2 < 0) {
        document.getElementById('num2').style.cssText = "border-color: red; color: red";
      } else {
        document.getElementById('num2').style.cssText = "border-color: #0395ff; color: #0395ff";
      }

    })
  }



}
