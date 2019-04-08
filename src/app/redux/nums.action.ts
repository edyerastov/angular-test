import {Action} from "@ngrx/store";
import INCREASE = NUMS_ACTION.INCREASE;
import {Nums} from "../nums.model";

export namespace NUMS_ACTION {
  export const INCREASE = 'INCREASE'
}

export class Increase implements Action {
  readonly type = NUMS_ACTION.INCREASE

  constructor(public payload: Nums) {}
}
