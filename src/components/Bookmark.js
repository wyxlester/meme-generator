import React from 'react'
import WhiteStar from '../assets/white-star.png'
import GoldStar from '../assets/gold-star.png'

const Bookmark = () => {
  const [like, setLike] = React.useState({
    comments: 'Click on star to like this meme!',
    likeIt: false
  })

  const toggleLike = () => {
    setLike(prevState => {
      return {
        ...prevState,
        likeIt: !prevState.likeIt
      }
    })
  }

  let starIcon = like.likeIt ? GoldStar : WhiteStar

  return (
    <div>
      <span className='ask-comments'>{like.comments}</span>
      <img src={starIcon} alt='star' className='star-icon' onClick={toggleLike}/>
    </div>
  )
}

export default Bookmark
