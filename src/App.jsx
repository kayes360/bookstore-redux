import { useState } from "react";
import BookForm from "./Components/BookForm";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [isBookEditing, setIsBookEditing] = useState(false);
  const [editableBook, setEditableBook] = useState([]);

  return (
    <>
      <Navbar setSearchInput={setSearchInput} />

      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookList
            searchInput={searchInput}
            setIsBookEditing={setIsBookEditing}
            setEditableBook={setEditableBook}
          />

          <BookForm
            isBookEditing={isBookEditing}
            editableBook={editableBook} 
          />
        </div>
      </main>
    </>
  );
}

export default App;

// Features
// ✅ If form submitted successfully data will be stored in the server
// ✅ Stored data will be shown in the book list section
// ✅ Rating will be shown maximum rating is 5
// ✅ If Delete clicked book will be deleted from the database
// ✅ Each time after Book Form operation form will be reset
// ✅ Booklist can be filtered by All and featured
// ✅ Books can be searched from the navigation search button result will reflect on the booklist

// ✅ Also if edit clicked book form button will be changed from 'Add Book' to 'Update Book' and after submit 'Add New Book' will be shown


// ✅ If any book is clicked to edit all the info of that book will be shown in the book form and those information can be updated and can be stored to server
// ✅ Check and fix some bug
