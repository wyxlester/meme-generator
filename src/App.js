import React from 'react'
import Navbar from './components/Navbar'
import Bookmark from './components/Bookmark'
import Meme from './components/Meme'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-5 main-wrapper">
        <h3>Welcome to Meme Generator by Lester Wee</h3>
        <Bookmark />
        <Meme />
      </div>
    </div>
  );
}

export default App;
