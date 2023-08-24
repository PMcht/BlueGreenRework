import React from 'react'
import './NumbersStyle.scss'

const Numbers = () => {
  return (
    <div className='fullWidth flex center justify-center margin' id="numbers">
        <div className='flex center flex-h'>
            <p className='number'>46</p>
            <p className='numberTitle'>Golfs en France</p>
        </div>
        <div className='flex center flex-h'>
            <p className='number'>30000</p>
            <p className='numberTitle'>Golfers passionés</p>
        </div>
        <div className='flex center flex-h'>
            <p className='number'>30</p>
            <p className='numberTitle'>Années à vos cotés</p>
        </div>
    </div>
  )
}

export default Numbers