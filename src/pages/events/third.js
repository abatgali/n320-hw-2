import React from 'react'
import HeroImage from '@/components/HeroImage'
export default function Third() {
  return (
    <div className='h-screen'>
      <HeroImage
          imageSource="/wineanddine.jpg"
          header="Sign up for Fine Dining event"
          height='100%'
          backgroundPosition="bottom center"
        />
    </div>
  )
}
