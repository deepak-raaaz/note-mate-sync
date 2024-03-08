import React from 'react'
import TitleWithViewBtn from '../header/TitleWithViewBtn';
import PeopleCard from '../../cards/PeopleCard';

type Props = {}

const PeopleYouMayKnow = (props: Props) => {
  const list = [1, 2, 3,4,5,6];

  return (
    <>
      <TitleWithViewBtn title="People you may know" url="#" />
      <div className="grid grid-cols-12 gap-4 my-4">
        {list.map((items) => (
          <div className="col-span-6 max-900px:col-span-12">
            <PeopleCard />
          </div>
        ))}
      </div>
    </>
  )
}

export default PeopleYouMayKnow