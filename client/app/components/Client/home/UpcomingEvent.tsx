import React from 'react'
import TitleWithViewBtn from '../header/TitleWithViewBtn';
import EventsCard from '../../cards/EventsCard';

type Props = {}

const UpcomingEvent = (props: Props) => {
  const list = [1, 2, 3];

  return (
    <>
      <TitleWithViewBtn title="Upcoming Events" url="#" />
      <div className="grid grid-cols-12 gap-6 my-4 ">
        {list.map((items) => (
          <div className="col-span-4 max-1300px:col-span-6 max-900px:col-span-12">
            <EventsCard />
          </div>
        ))}
      </div>
    </>
  )
}

export default UpcomingEvent