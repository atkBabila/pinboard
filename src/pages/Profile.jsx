
import React from 'react'

const Profile = () => {
  return (
    
    <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-row w-[600px] m-8 p-6 bg-neutral-50 rounded-lg shadow-md">
    	    <div className="flex flex-col items-center w-1/2 border">
    	        <div className="relative w-full h-full flex flex-col items-center">
    	            <img src="https://tools-api.webcrumbs.org/image-placeholder/100/100/person/1" alt="Profile" className="rounded-full w-3/4 h-full object-cover" />
    	            <div className="absolute -bottom-2.5 left-12 transform translate-x-1/2">
    	                <button className="bg-black text-white text-xs rounded-md py-1 px-3 tooltip material-symbols-outlined" data-tooltip="Update">upload</button>
    	            </div>
    	        </div>
    	        <div className="mt-4">
    	        <div className="flex items-center">
    	            <div className="flex flex-col items-center text-sm text-gray-600">
    	                <div className="relative w-full mt-2">
    	                    <div className="absolute top-0 left-0 h-[4px] w-1/2 bg-emerald-500" style={{ width: '53%' }}></div>
    	                    <div className="absolute top-0 right-0 h-[4px] w-1/2 bg-gray-300" style={{ width: '47%' }}></div>
    	                </div>
    	                <span className="text-xs mt-1">YOUR RATING</span>
    	                <span>53%</span>
    	            </div>
    	            <div className="flex flex-col items-center text-sm text-gray-600 ml-4">
    	                <div className="relative w-full ml-6 mt-2">
    	                    <div className="absolute top-0 left-0 h-[4px] w-1/2 bg-emerald-500" style={{ width: '90%' }}></div>
    	                    <div className="absolute top-0 right-0 h-[4px] w-1/2 bg-gray-300" style={{ width: '10%' }}></div>
    	                </div>
    	                <span className="text-xs mt-1">ACTIVITY</span>
    	                <span>90%</span>
    	            </div>
    	        </div>
    	    </div>
    	    </div>
    	    <div className="mt-4 flex flex-col w-1/2 justify-start items-start">
                <div>
    	            <h1 className="text-2xl font-bold">Kanye West</h1>
    	            <p className="text-sm text-gray-500">San Francisco, CA</p>
    	        </div>
    	        <div className="ml-auto">
    	            <button className="bg-emerald-500 text-white rounded-md px-4 py-2 text-xs">EDIT</button>
    	        </div>
    	        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
    	            <div className="flex flex-col">
    	                <span className="text-xs">Email</span>
    	                <span>kanye@aweso.me</span>
    	            </div>
    	            <div className="flex flex-col">
    	                <span className="text-xs">City</span>
    	                <span>San Francisco</span>
    	            </div>
    	            <div className="flex flex-col">
    	                <span className="text-xs">State</span>
    	                <span>CA</span>
    	            </div>
    	            <div className="flex flex-col">
    	                <span className="text-xs">Country</span>
    	                <span>USA</span>
    	            </div>
    	            <div className="flex flex-col">
    	                <span className="text-xs">Phone</span>
    	                <span>+1 (415) 655-17-10</span>
    	            </div>
    	        </div>
    	    </div>
    	    
    	</div>
    </div>

  )
}

export default Profile
 