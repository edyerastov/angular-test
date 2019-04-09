import {Action} from "@ngrx/store";
import {Nums} from "../nums.model";
import {Increase, NUMS_ACTION} from "./nums.action";

const initialState: Nums =  {
  num1: -5,
  num2: 10
};

export function numsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case NUMS_ACTION.INCREASE:
      return {
        num1: state.num1 + 1,
        num2: state.num2
      };
    case NUMS_ACTION.DECREASE:
      return {
        num1: state.num1,
        num2: state.num2 - 1
      };
    case NUMS_ACTION.CHANGE:
      return{
        num1: state.num1 += 1,
        num2: state.num2 -= 2
      };
    default:
      return state;
  }
}
