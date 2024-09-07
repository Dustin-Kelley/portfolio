import React from 'react'

const WorkItems = ({item}) => {
  console.log(item)
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt='' className='work__img' />
      <h3 className='work__title'>{item.title}</h3>
      <a href={item.url} target='_blank' rel="noreferrer" className='work__button'>
        Try it out <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
    </div>
  )
}

export default WorkItems;