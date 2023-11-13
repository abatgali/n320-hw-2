import React from 'react'
import HeroImage from '@/components/HeroImage'
import EventCard from '@/components/eventCard'
import Link from 'next/link'
import BackToHome from '@/components/BackToHome'

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
          <Link href='/events/first' className='w-full'>
            <EventCard imageSource='/eventshero.jpg' eventName='Some exciting new show near you'/>
          </Link>
          <Link href='/events/second' className='w-full'>
            <EventCard imageSource='/soccer2.jpg' eventName='Some exciting new show near you'/>
          </Link>
          <Link href='/events/third' className='w-full'>
            <EventCard imageSource='/wineanddine.jpg' eventName='Some exciting new show near you'
            backgroundPosition='center center'/>
          </Link>
        <BackToHome/>
        </div>
    </>
  )
}
