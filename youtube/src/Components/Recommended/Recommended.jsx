import React from 'react'
import { data } from '../../assets/assets'

const Recommended = () => {
  return (
    <div className='recommended-menu w-full mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md-grid-cols-4 gap-3'>

      {data.map((item, index) => {
        return (
          <div 
            key={index} 
            className="bg-neutral-primary-soft border h-35 border-default rounded-base shadow-xs p-2"
          >
            <div className="flex gap-3">

              {/* Thumbnail */}
              <a href="#">
                <img 
                  className="rounded-base h-30 w-80 object-cover" 
                  src={item.image} 
                  alt="thumbnail" 
                />
              </a>

              {/* Content */}
              <div className="flex flex-col justify-between">
                <p className="text-body font-medium leading-tight">
                  {item.description}
                </p>

                <p className="text-sm opacity-80">{item.channel}</p>

                <div className="flex items-center justify-between text-sm opacity-70">
                  <p>{item.views}</p>
                  <p>{item.days}</p>
                </div>
              </div>

            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Recommended
