import React, { useEffect, useState } from "react";
import ExplorarImg from "../assets/images/relax.gif";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import fetchBooks from "../redux/thunk/fetchBooks";

export default function BookList({
  searchInput,
  setIsBookEditing,
  setEditableBook,
}) {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  // console.log("bookList",bookList)
  const [selectedFilter, setSelectedFilter] = useState("All");
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  const handleFilter = (filterName) => {
    setSelectedFilter(filterName);
  };

  const filteredBookList = bookList.filter((book) => {
    return selectedFilter === "Featured" ? book.bookFeatured : true;
  });

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className="filter-btn active-filter"
            id="filterAll"
            onClick={() => handleFilter("All")}
          >
            All
          </button>
          <button
            className="filter-btn"
            id="filterFeatured"
            onClick={() => handleFilter("Featured")}
          >
            Featured
          </button>
        </div>
      </div>

      {bookList.length === 0 ? (
        <div className="flex justify-center items-center">
          <img src={ExplorarImg} alt="" />
        </div>
      ) : (
        <div className="bookContainer">
          {filteredBookList
            .filter((book) =>
              searchInput === ""
                ? book
                : book.bookName
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
            )
            .map((book) => (
              <BookCard
                key={book.id}
                book={book}
                setIsBookEditing={setIsBookEditing}
                setEditableBook={setEditableBook}
              />
            ))}
        </div>
      )}
    </div>
  );
}
