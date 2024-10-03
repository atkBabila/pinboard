import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className="w-[800px] min-h-[800px] shadow rounded-lg bg-neutral-50 overflow-hidden">
    	    <div className="relative">
    	        <div className="h-72 bg-[#FA5B30]">
    	            <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-20">
    	                <h1 className="text-white text-2xl font-title">Contact us</h1>
    	                <p className="text-white max-w-md text-center">Get in touch with our developer agency to see how we can assist you with your toughest challenges.</p>
    	            </div>
    	        </div>
    	        <div className="absolute top-40 w-full flex justify-center">
    	            <div className="bg-neutral-50 p-8 space-y-10 rounded-lg shadow w-[90%] max-w-[600px] mt-16">
    	                <form className="space-y-6">
    	                    <div className="flex space-x-4">
    	                        <div className="flex flex-col w-1/2 space-y-2">
    	                            <label>First name</label>
    	                            <input type="text" placeholder="Bonnie" className="p-2 border rounded-md"/>
    	                        </div>
    	                        <div className="flex flex-col w-1/2 space-y-2">
    	                            <label>Last name</label>
    	                            <input type="text" placeholder="Green" className="p-2 border rounded-md"/>
    	                        </div>
    	                    </div>
    	                    <div className="flex space-x-4">
    	                        <div className="flex flex-col w-1/2 space-y-2">
    	                            <label>Email</label>
    	                            <input type="email" placeholder="name@example.com" className="p-2 border rounded-md"/>
    	                        </div>
    	                        <div className="flex flex-col w-1/2 space-y-2">
    	                            <label>Phone number</label>
    	                            <input type="text" placeholder="+(12) 345 6789" className="p-2 border rounded-md"/>
    	                        </div>
    	                    </div>
    	                    <div className="flex flex-col space-y-2">
    	                        <label>Your message</label>
    	                        <textarea rows="4" className="p-2 border rounded-md"></textarea>
    	                    </div>
    	                    <div className="flex items-start space-x-3">
    	                        <input type="checkbox" className="mt-1"/>
    	                        <p className="text-sm">By submitting this form, you confirm that you have read and agree to our <a href="#" className="text-blue-600 underline">Terms of Service</a> and <a href="#" className="text-blue-600 underline">Privacy Statement</a></p>
    	                    </div>
    	                    <div className="flex justify-end">
    	                        <button type="submit" className="px-4 py-2 bg-[#FA5B30] text-white rounded-md shadow">Send message</button>
    	                    </div>
    	                </form>
    	            </div>
    	        </div>
    	    </div>
    	</div> 
    </div>
  )
}

export default Contact