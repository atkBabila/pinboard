import React from 'react'

export const Pin = () => {
  return (
    <div className="w-[1080px] shadow-lg rounded-lg bg-neutral-50 p-4">
    	  <main className="flex space-x-8">
    	    <section className="w-[600px] flex flex-row space-x-4">
    	      <img src="https://tools-api.webcrumbs.org/image-placeholder/600/400/sofa/1" alt="Sofa" className="w-4/5 h-full object-cover rounded-md mb-4" />
    	      <div className="flex flex-col justify-around space-y-2">
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/100/100/sofa/2" alt="Sofa View 1" className="w-[80px] h-[80px] object-cover rounded-md" />
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/100/100/sofa/3" alt="Sofa View 2" className="w-[80px] h-[80px] object-cover rounded-md" />
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/100/100/sofa/4" alt="Sofa View 3" className="w-[80px] h-[80px] object-cover rounded-md" />
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/100/100/sofa/5" alt="Sofa View 4" className="w-[80px] h-[80px] object-cover rounded-md" />
    	      </div>
    	    </section>
    	  
    	    <section className="w-[400px]">
    	      <h1 className="font-title text-3xl mb-2">Ilana</h1>
    	      <p className="mb-4">A sectional sofa or an L shaped sofa can make a great addition to your living room based on your needs.</p>
    	
    	      <div className="text-2xl font-semibold mb-4">$ 430.99</div>
    	
    	      <div className="flex items-center mb-4">
    	        <div className="text-yellow-500 flex space-x-1">
    	          <span className="material-symbols-outlined">star</span>
    	          <span className="material-symbols-outlined">star</span>
    	          <span className="material-symbols-outlined">star</span>
    	          <span className="material-symbols-outlined">star</span>
    	          <span className="material-symbols-outlined">star_half</span>
    	        </div>
    	        <span className="ml-2 text-sm text-gray-500">441 reviews</span>
    	      </div>
    	
    	      <div className="mb-4">
    	        <span className="font-semibold">Colour:</span>
    	        <div className="flex space-x-2 mt-2">
    	          <div className="w-[24px] h-[24px] bg-gray-400 rounded-full border"></div>
    	          <div className="w-[24px] h-[24px] bg-orange-500 rounded-full border"></div>
    	          <div className="w-[24px] h-[24px] bg-blue-500 rounded-full border"></div>
    	          <div className="w-[24px] h-[24px] bg-green-700 rounded-full border"></div>
    	        </div>
    	      </div>
    	
    	      <div className="flex space-x-4 mb-4">
    	        <button className="flex items-center justify-center px-4 py-2 border rounded-md">Buy Now</button>
    	        <button className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-md">Add to basket</button>
    	      </div>
    	
    	      <div className="mb-4 text-sm text-gray-500">
    	        <p>Dispatched in 5 – 7 weeks <span className="material-symbols-outlined">info</span></p>
    	        <details>
    	          <summary className="underline cursor-pointer">Why the longer lead time?</summary>
    	          <p>Due to high demand, our popular items may have a longer lead time to ensure quality and timely delivery.</p>
    	        </details>
    	      </div>
    	
    	      <div className="text-sm text-gray-500">Home Delivery - $10</div>
    	    </section>
    	  </main>
    	
    	  <section className="mt-8">
    	    <h2 className="font-title text-xl mb-2">Recently viewed</h2>
    	    <div className="flex space-x-4 overflow-x-auto">
    	      <div className="flex-shrink-0">
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/150/150/sofa/6" alt="Recently viewed" className="w-[150px] h-[150px] object-cover rounded-md" />
    	        <p className="text-center">Lottie</p>
    	        <p className="text-center font-semibold">$ 250.99</p>
    	      </div>
    	      <div className="flex-shrink-0">
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/150/150/sofa/7" alt="Recently viewed" className="w-[150px] h-[150px] object-cover rounded-md" />
    	        <p className="text-center">Primrose</p>
    	        <p className="text-center font-semibold">$ 320.99</p>
    	      </div>
    	      <div className="flex-shrink-0">
    	        <img src="https://tools-api.webcrumbs.org/image-placeholder/150/150/sofa/8" alt="Recently viewed" className="w-[150px] h-[150px] object-cover rounded-md" />
    	        <p className="text-center">Lottie</p>
    	        <p className="text-center font-semibold">$ 243.99</p>
    	      </div>
    	    </div>
    	  </section>
    	</div> 
  )
}
