import { update_books } from "../books/actions";

const updateBooks = (bookInfo) => {
  console.log("updateBooks thunk ",bookInfo)
  const {id} = bookInfo
  console.log("id thunk ",id)
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ 
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
    dispatch(update_books(books));
  };
};
export default updateBooks;
