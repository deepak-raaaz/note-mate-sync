'use client'
import React, { FC } from 'react'
import TopSwiper from './TopSwiper'
import WelcomeSection from './WelcomeSection'
import RecentlyViewd from './RecentlyViewed'
import TopNotes from './TopNotes'
import PopularCommunity from './PopularCommunity'
import UpcomingEvent from './UpcomingEvent'
import PeopleYouMayKnow from './PeopleYouMayKnow'

type Props = {}

const Home:FC<Props> = () => {
  return (
    <div>
        <TopSwiper/>
        <WelcomeSection/>
        <RecentlyViewd/>
        <TopNotes/>
        <PeopleYouMayKnow/>
        <PopularCommunity/>
        <UpcomingEvent/>
    </div>
  )
}

export default Home