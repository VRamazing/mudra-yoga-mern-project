import React from 'react'
import PropTypes from 'prop-types'

export default function MudraItem({title, img, benefits, link, contra}) {
  return (
    <div>
      <h1>{title}</h1>
      <image src={img} />
      <ul>
        {benefits.map((benefit) => <li>{benefit}</li>)}
      </ul>
      <a href={link}>Full link</a>

      <ul>
        {contra}
      </ul>
    </div>
  )
}


MudraItem.propTypes = {
    img: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired, 
    contra: PropTypes.string, 
}