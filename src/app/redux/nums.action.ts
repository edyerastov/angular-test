import {Action} from "@ngrx/store";
import INCREASE = NUMS_ACTION.INCREASE;

export namespace NUMS_ACTION {
  export const INCREASE = 'INCREASE';
  export const DECREASE = 'DECREASE';
  export const CHANGE = 'CHANGE'
}

export class Increase implements Action {
  public readonly type = NUMS_ACTION.INCREASE;
}

export class Decrease implements Action {
  public readonly type = NUMS_ACTION.DECREASE;
}

export class Change implements Action {
  public readonly type = NUMS_ACTION.CHANGE;
}
