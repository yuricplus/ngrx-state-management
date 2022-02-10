import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../../book-list/book.model';
import { booksReducer } from '../reducers/books.reducer';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books')

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('colection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id ));
  }
)