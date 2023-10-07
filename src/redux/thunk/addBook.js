import { add_books } from "../books/actions";

const addBooks = (bookInfo) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        bookId: bookInfo.bookId,
        bookName: bookInfo.bookName,
        bookAuthor: bookInfo.bookAuthor,
        bookImgURL: bookInfo.bookImgURL,
        bookPrice: bookInfo.bookPrice,
        bookRating: bookInfo.bookRating,
        bookFeatured: bookInfo.bookFeatured,
      }),
      headers: {
        "Content-type": "application/json; charset= UTF-8",
      },
    });
    const books = await response.json();
    dispatch(add_books(books));
  };
};
export default addBooks;
