import React from 'react'
import HeroImage from '@/components/HeroImage'
import EventCard from '@/components/eventCard'

export default function Events() {
  return (
    <>
        <HeroImage
          imageSource="./eventshero.jpg"
          header="Upcoming Events"
          height='300px'
          backgroundPosition="bottom center"
        />
        <div className='p-16 gap-10 flex flex-wrap'>
            <EventCard imageSource='/eventshero.jpg' eventName='Some exciting new show near you'/>
            <EventCard imageSource='/soccer2.jpg' eventName='Some exciting new show near you'/>
            <EventCard imageSource='/wineanddine.jpg' eventName='Some exciting new show near you'
            backgroundPosition='center center'/>
        </div>
    </>
  )
}
