import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset, debug } from "../actions/counter.actions";

export const _initialState = 0;

const _counterReducer = createReducer(
  _initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(debug, (state) => {
    console.log(state)
    return 10
  })
)

export function counterReducer(state: any, action:any) {
  return _counterReducer(state, action); 
}