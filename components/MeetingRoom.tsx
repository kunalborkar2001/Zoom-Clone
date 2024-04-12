import { PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk'
import React, { useState } from 'react'

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right'

const MeetingRoom = () => {

  const [layout, setlayout] = useState('speaker-left')

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />
      case 'speaker-right':
        return <SpeakerLayout
          participantsBarPosition='left'
        />
      default:
        return <SpeakerLayout
          participantsBarPosition='right'
        />

    }
  }
  return (
    <section className='relative h-screen w-full overflow-hidden pt-4'>
      <div className='relative flex size-full items-center justify-center'>
        <div className='flex size-full max-w-[1000px] items-center'>
          <CallLayout />
        </div>
      </div>

    </section>
  )
}

export default MeetingRoom