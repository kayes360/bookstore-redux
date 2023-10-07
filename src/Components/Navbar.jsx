import React from 'react'
import Logo from "../assets/images/logo.gif";
import { SearchIcon } from '../assets/icons'  

export default function Navbar({setSearchInput}) {
  const handleSearch =(e)=>{
    setSearchInput(e.target.value)
  }
  return (
    <nav className="py-4 2xl:px-6">
        <div className="container flex items-center justify-between">
          <img src={Logo} width="150px" className="object-contain" />

          <ul className="hidden md:flex items-center space-x-6">
            <li className="font-semibold cursor-pointer">Book Store</li>
            <li className="cursor-pointer">Wishlist</li>
            <li className="cursor-pointer">My Collection</li>
          </ul>

          <form className="flex items-center">
            <div className="group relative rounded-md bg-white">
               <SearchIcon/>
              <input
                type="text"
                placeholder="Filter books..."
                className="search"
                id="searchBook"
                onChange={handleSearch}
              />
            </div>
          </form>
        </div>
      </nav>
  )
}
