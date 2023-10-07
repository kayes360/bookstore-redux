import { LOADED_BOOKS, ADD_BOOKS, DELETE_BOOK, UPDATE_BOOKS } from "./actionTypes";

export const loaded_books = (books)=>{
    return{
        type: LOADED_BOOKS,
        payload: books
    }
}
export const add_books = (bookInfo)=>{
    return{
        type: ADD_BOOKS,
        payload: bookInfo
    }
}
export const update_books = (bookInfo)=>{
    return{
        type: UPDATE_BOOKS,
        payload: bookInfo
    }
}
export const delete_book = (id)=>{
    return{
        type: DELETE_BOOK,
        payload: id
    }
}
