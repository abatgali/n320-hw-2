import React from 'react'

export default function ContentTile(props) {
    console.log(props.height)
  return (
    <div className={`w-1/4 h-auto mt-12 shadow-xl rounded-lg max-sm:w-3/4 mx-auto object-cover `} style={{backgroundImage: `url(${props.url})`, height: `${props.height}`}}></div>
    
  )
}
