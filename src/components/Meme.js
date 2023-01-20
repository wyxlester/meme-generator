import React from 'react'
import memesData from '../memesData.js'
import Troll from '../assets/troll_face.png'

const Meme = () => {
  const [memesImage, setMemesImage] = React.useState(Troll)
  const getMemeImage = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemesImage(memesArray[randomNumber].url)
    console.log(memesImage)
  }

  const [cuteRight, setCuteRight] = React.useState(false)

  const clickedYes = () => { setCuteRight(true) }

  const clickedNo = () => { setCuteRight(false) }

  return (
    <div>
      <div className='row py-4 my-2 g-3'>

        <div className='col-6 my-auto mx-auto'>
          <form className='form'>
            <input
              type='text'
              placeholder='first input'
              className='form--input'
            />
          </form>
        </div>

        <div className='col-6 my-auto mx-auto'>
          <form className='form'>
            <input
              type='text'
              placeholder='second input'
              className='form--input'
            />
          </form>
        </div>

      </div>

      <div className='row py-3 g-3'>
        <div className='col my-auto mx-auto'>
          <button className='form--button' onClick={getMemeImage}>
            Generate a Meme! 🖼
          </button>
        </div>
      </div>

      <div className='row py-3 g-3'>
        <div className='col-sm-12 col-md-6 my-auto mx-auto'>
          <img src={memesImage} alt='meme' className='img-fluid rounded mx-auto d-block pt-3 meme--image'/>
        </div>
        <div className='col-sm-12 col-md-6 my-auto mx-auto text-center'>
          <h1>Cute or not?</h1>
          <button className='state--button-yes' onClick={clickedYes}>
            Yes
          </button>
          <button className='state--button-no' onClick={clickedNo}>
            No
          </button>
          <h3>{cuteRight === false ? 'No' : 'Yes'}</h3>
        </div>
      </div>
    </div>
  )
}

export default Meme;
