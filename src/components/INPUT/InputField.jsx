import React from 'react'

const InputField = ({type,name,placeHolder,option}) => {
  return (
    <div>
        <input
        className=' p-2 rounded-md mx-2 my-2 focus:outline-slate-200'
         type={type} name={name} id="" placeholder={placeHolder} />

    </div>
  )
}

export default InputField