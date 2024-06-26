import React from 'react'

const EmailSubscriptionComp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
    
	<div className="bg-white rounded-2xl border shadow-xl p-10 max-w-lg">
    <div className="flex flex-col items-center space-y-4">
	  <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">Email Subscription</h1>
    <p className="text-sm text-gray-500 text-center w-5/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborea.</p>
    <input type="text" placeholder="Email" className="border-2 rounded-lg w-full h-12 px-4" />
    <button className="bg-blue-400 text-white rounded-md font-semibold px-4 py-3 w-full">Subscribe</button>

    </div>
	
  </div>
	
  </div>
  )
}

export default EmailSubscriptionComp