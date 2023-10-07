import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import addBooks from "../redux/thunk/addBook";
import updateBooks from "../redux/thunk/updateBook";
export default function BookForm({ isBookEditing, editableBook }) {
  const dispatch = useDispatch();
 
  // Initialize bookInfo state differently depending on whether in edit mode
  const [bookInfo, setBookInfo] = useState({
    bookName: "",
    bookAuthor: "",
    bookImgURL: "",
    bookPrice: "",
    bookRating: "",
    bookFeatured: false,
  });

  const handleChange = (e) => {
    setBookInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
      bookFeatured: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBookEditing) { 
      dispatch(updateBooks(bookInfo))
      
    }else{

      dispatch(addBooks(bookInfo));
    }
    setBookInfo({ 
      bookName: "",
      bookAuthor: "",
      bookImgURL: "",
      bookPrice: "",
      bookRating: "",
      bookFeatured: false,
    });
  };
  useEffect(() => {
    if (isBookEditing) {
      setBookInfo({
        id: editableBook.id,
        bookName: editableBook.bookName,
        bookAuthor: editableBook.bookAuthor,
        bookImgURL: editableBook.bookImgURL,
        bookPrice: editableBook.bookPrice,
        bookRating: editableBook.bookRating,
        bookFeatured: editableBook.bookFeatured,
      });
    } else {
      setBookInfo({
        bookName: "",
        bookAuthor: "",
        bookImgURL: "",
        bookPrice: "",
        bookRating: "",
        bookFeatured: false,
      });
    }
  }, [isBookEditing, editableBook]);
  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="bookName"
              value={bookInfo.bookName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="bookAuthor"
              value={bookInfo.bookAuthor}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="bookImgURL"
              value={bookInfo.bookImgURL}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="bookPrice"
                value={bookInfo.bookPrice}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="bookRating"
                value={bookInfo.bookRating}
                min="1"
                max="5"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center ">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="bookFeatured"
              className="w-4 h-4 cursor-pointer"
              checked={bookInfo.bookFeatured}
              onChange={handleChange}
            />
            <label
              htmlFor="input-Bookfeatured"
              className="ml-2 text-sm cursor-pointer"
            >
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {isBookEditing ? "Update Book" : "Add New Book"}
          </button>
        </form>
      </div>
    </div>
  );
}
