import React from "react";

import {
  EditIcon,
  DeleteIcon,
  StarOutlinedIcon,
  StarSolidIcon,
} from "../assets/icons";
import { useDispatch } from "react-redux";
import { delete_book, update_books } from "../redux/books/actions";
import deleteBook from "../redux/thunk/deleteBook";
export default function BookCard({ book, setIsBookEditing, setEditableBook }) {
  // console.log("book", book)
  const dispatch = useDispatch();
  const {
    id,
    bookImgURL,
    bookFeatured,
    bookName,
    bookAuthor,
    bookRating,
    bookPrice,
  } = book;
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  const handleEdit = (bookInfo) => {
    setIsBookEditing(true);
    setEditableBook(bookInfo);
    // setSelectedBook()
    // dispatch(update_books(bookInfo))
  };
  return (
    <div className="book-card">
      <img
        className="h-[240px] w-[170px] object-cover bookThumbnail"
        src={bookImgURL}
        alt={bookName}
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          {bookFeatured && (
            <span className="badge-success Badge">Featured</span>
          )}
          <div className="text-gray-500 space-x-2 ml-auto">
            <button className="edit" onClick={() => handleEdit(book)}>
              <EditIcon />
            </button>

            <button className="delete" onClick={() => handleDelete(id)}>
              <DeleteIcon />
            </button>
          </div>
        </div>

        <div className="space-y-2 mt-4   h-full">
          <h4 className="bookName">{bookName}</h4>
          <p className="author">{bookAuthor}</p>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {index < bookRating ? <StarSolidIcon /> : <StarOutlinedIcon />}
              </span>
            ))}
          </div>
          <p className="price">BDT {bookPrice}</p>
        </div>
      </div>

     
    </div>
  );
}
