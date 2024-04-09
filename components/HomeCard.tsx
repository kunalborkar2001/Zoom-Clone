import Image from 'next/image'
import React from 'react'

const HomeCard = () => {
    return (
        <div>
            <div className="bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer"
                onClick={() => { }}
            >
                <div className="flex flex-center glassmorphism size-12 rounded-[10px]">
                    <Image
                        src="/icons/add-meeting.svg"
                        alt="meetings"
                        width={27}
                        height={27}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">
                        New meeting
                    </h1>
                    <p className="text-lg font-normal">
                        Start an instant meeting
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeCard