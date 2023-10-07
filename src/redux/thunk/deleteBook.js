import { delete_book } from "../books/actions";

const deleteBook = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${id}`, {
      method: "DELETE",
    }); 
 
    dispatch(delete_book(id));
  };
};
export default deleteBook;

 
