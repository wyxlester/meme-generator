import React from 'react'

const Meme = () => {
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

        <div className='row py-3 g-3'>
          <div className='col my-auto mx-auto'>
            <button className='form--button'>
              Generate a Meme!
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Meme;
