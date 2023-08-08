import React from 'react'

const HeroControl = () => {
  return (
    <div className='flex flex-col gap-6 justify-center '>
        <div className='p-2' >
         <select
          name="ftype"
          id="typename"
          className=" my-2 w-44 py-2 rounded-md focus:outline-slate-200"
          >
          <option value="choice">Choose a type</option>
          <option value="json">JSON</option>
          <option value="csc">CSV</option>
          <option value="text">TEXT</option>
        </select>
        </div>
        <div className='flex p-2 gap-4'>
            <input className='w-36 rounded-md focus:outline-gray-400' type="text" placeholder="  rows count"/>
            <button className='w-36 bg-blue-600 rounded-md text-white'>Generate Endpoint</button>
        </div>
        <div className='p-2'>
            <textarea className=' rounded-md focus:outline-gray-400 w-72' name="" id="" cols="25" rows="3" placeholder='  End Point Link'></textarea>
        </div>
        

    </div>
  )
}

export default HeroControl;