import { createReducer, on } from '@ngrx/store';
import { addBook, removeBook } from '../actions/books.actions';

export const inittialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  inittialState,
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    if(state.indexOf(bookId) > -1) return state;

    return [...state, bookId]
  })
)