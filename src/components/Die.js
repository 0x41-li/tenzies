import React from 'react'

export default function Die(props) {
  return (
    <div className='game-board__die'>
      <span>{props.value}</span>
    </div>
  )
}
