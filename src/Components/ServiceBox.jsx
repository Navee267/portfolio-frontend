import React from 'react'

const ServiceBox = ({img,title,description}) => {
  return (
    <div className='border-2 gap-2 border-slate-200 w-96 h-80 p-5 justify-center rounded-2xl hover:bg-slate-50 hover:border-green-400 duration-300 ease-in-out cursor-pointer items-start flex-col flex'>
        <img src={img} alt={title} className='w-36' />
        <h3 className='text-green-600 mb-3 mt-2 text-xl font-display'>{title}</h3>
        <h4 className='text-sm font-medium text-slate-500 font-display'>{description}</h4>
    </div>
  )
}

export default ServiceBox