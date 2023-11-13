import React from 'react'
import HeroImage from '@/components/HeroImage'
export default function Second() {
  return (
    <div className='h-screen'>
      <HeroImage
          imageSource="/soccer2.jpg"
          header="Sign up for Soccer Match"
          height='100%'
          backgroundPosition="bottom center"
        />
    </div>
  )
}
