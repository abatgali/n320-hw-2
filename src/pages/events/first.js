import HeroImage from '@/components/HeroImage'
import React from 'react'

export default function First() {
  return (
    <div className='h-screen'>
      <HeroImage
          imageSource="/eventshero.jpg"
          header="Sign up for Concert"
          height='100%'
          backgroundPosition="bottom center"
        />
    </div>
  )
}
