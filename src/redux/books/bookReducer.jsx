import {
  LOADED_BOOKS,
  ADD_BOOKS,
  DELETE_BOOK,
  UPDATE_BOOKS,
} from "./actionTypes";

const initialState = [];

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_BOOKS:
      return action.payload;

    case ADD_BOOKS:
      return [
        ...state,
        {
          bookName: action.payload.bookName,
          bookAuthor: action.payload.bookAuthor,
          bookImgURL: action.payload.bookImgURL,
          bookPrice: action.payload.bookPrice,
          bookRating: action.payload.bookRating,
          bookFeatured: action.payload.bookFeatured,
        },
      ];
    case UPDATE_BOOKS:
      console.log("UPDATE_BOOKS action.payload", action.payload);
      const updatedBook = state.map((book) => {
        if (book.id === action.payload.id) {
          return {
            ...book,
            bookName: action.payload.bookName,
            bookAuthor: action.payload.bookAuthor,
            bookImgURL: action.payload.bookImgURL,
            bookPrice: action.payload.bookPrice,
            bookRating: action.payload.bookRating,
            bookFeatured: action.payload.bookFeatured,
          };
        } else {
          return book;
        }
      });
      return updatedBook;

      
    case DELETE_BOOK:
      // console.log("action.payload", action.payload)
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};
