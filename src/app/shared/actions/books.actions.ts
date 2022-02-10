import { createAction, props } from "@ngrx/store";
import { Book } from '../../book-list/book.model';

export const addBook = createAction(
  '[Books List] Add Book',
  props<{ bookId: string }>()
)

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
)

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Succes',
  props<{ books: ReadonlyArray<Book> }>()
)