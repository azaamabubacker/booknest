import { api } from '../query/client';
import { NewBook, type Book, type UpdateBook } from './types';

export async function fetchBooks(): Promise<Book[]> {
  try {
    const r = await api.get<Book[]>('/books');
    return r.data;
  } catch (e) {
    console.log('Error fetching books', e);
    throw e;
  }
}

export async function fetchBook(id: number): Promise<Book[]> {
  try {
    const r = await api.get<Book[]>(`/books/${id}`);
    return r.data;
  } catch (e) {
    console.log('Error fetching book', e);
    throw e;
  }
}

export async function createBook(payload: NewBook): Promise<NewBook[]> {
  try {
    const r = await api.post<NewBook[]>('/books', payload);
    return r.data;
  } catch (e) {
    console.log('Error create book', e);
    throw e;
  }
}

export async function updateBook(id: number, payload: UpdateBook): Promise<UpdateBook[]> {
  try {
    const r = await api.put<UpdateBook[]>(`/books/${id}`, payload);
    return r.data;
  } catch (e) {
    console.log('Error updating book', e);
    throw e;
  }
}
