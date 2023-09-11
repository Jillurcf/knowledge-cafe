
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setbookmarks] = useState([])

  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
   const newBookmarks = [...bookmarks, blog ];
   setbookmarks(newBookmarks);
  }

  const  handleMarkAsRead = (id, time) =>{
    // setReadingTime(readingTime + time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the read blog form the bookmark
   const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
   setbookmarks(remainingBookMarks);

  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>
      
     
    </>
  )
}

export default App
