import { api } from '../query/client';
// import { Book } from './types';

export async function fetchBooks() {
  api
    .get('/books')
    .then((r) => {
      console.log(r.data);
    })
    .catch((e) => {
      console.log('Error fetching books', e);
    });
}

export async function fetchBook(id: number) {
  api
    .get(`/books/${id}`)
    .then((r) => {
      console.log(r.data);
    })
    .catch((e) => console.log('Error fetching book', e));
}
