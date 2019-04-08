import {Action} from "@ngrx/store";
import {Num} from "../nums.model";
import {Increase, NUMS_ACTION} from "./nums.action";

const initialState =  {
  nums: [
    new Num(-5),
    new Num(10)
  ]
};

export function numsReducer(state = initialState, action: Increase) {
  switch (action.type) {
    case NUMS_ACTION.INCREASE:
      return this.nums[0]++;
    default:
      return state;
  }
}
