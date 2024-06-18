import React from 'react'

export default function Profile() {
  return (
    <div className="container mx-auto ">
        <div className="grid grid-cols-2 gap-4">
            <div className='flex flex-col p-4 border border-blue-500'>
                <di className="flex flex-row justify-between">
                    <div className='flex flex-col'>
                        <div className='bg-gray-300 '>
                            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                        </div>

                        <div className='flex justify-between'>
                            <h1>Recently viewed</h1>
                            <button>next</button>
                        </div>
                        <div className='flex justify-between '>
                            <div className='bg-gray-200 rounded-md '>
                                <img src="" alt="" />
                                <div>
                                    <p>Description #1</p>
                                </div>
                            </div>
                            <div className='bg-gray-200 rounded-md'>
                                <img src="" alt="" />
                                <div>
                                    <p>Description #2</p>
                                </div>
                            </div>
                            <div className='bg-gray-200 rounded-md'>
                                <img src="" alt="" />
                                <div>
                                    <p>Description #3</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-around w-1/6 border border-yellow-400 '>
                        <div className='border border-purple-600'>
                            <img src="" alt="" />
                        </div>
                        <div className='border border-purple-600'>
                            <img src="" alt="" />
                        </div>
                        <div className='border border-purple-600'>
                            <img src="" alt="" />
                        </div>
                        <div className='border border-purple-600'>
                            <img src="" alt="" />
                        </div>
                    </div>
                </di>
               
            </div>
            <div className='flex flex-col border border-green-500'>
                <div className='flex flex-row justify-between p-4 '>
                    <h1>Ilana</h1>
                    <span className='bg-gray-200 rounded-full w-20 h-20 '>
                        <img className='' src="" alt="like" />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
