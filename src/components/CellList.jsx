import React, {useContext, useEffect, useState} from 'react'
import arrows from '../assets/Vector.png'

import { Context } from '../context/ContextProvider'
import { Cell } from './Cell'
import { Legend } from './Legend'

export const CellList = () => {
    
    const {auth} = useContext(Context)
    
    const [list, setList] = useState([])
    
    
    
    
    useEffect(() => {
        
       
      fetch('https://admin-api-service-wczftpjfda-no.a.run.app/projects',{
       
        headers : {
        
            'Authorization': `Bearer ${auth}`
        },
      
      }).then(res => res.json()).then(res => setList(res))
    
      
    }, [])
    

  return (
    <div className='grid grid-cols-5  w-full gap-y-4 items-center rounded-md'>
        
        
            <p className=' px-6 py-3 bg-[#F9FAFB] font-medium text-[#6B7280]'>PROYECTO</p>
            <p className='px-6 py-3 bg-[#F9FAFB] font-medium text-[#6B7280]'>PROMOTOR</p>
            <p className='px-6 py-3 bg-[#F9FAFB] font-medium text-[#6B7280]'>LUGAR</p>
            <div className='px-6 py-3 bg-[#F9FAFB] flex items-center gap-1'>
                <img src={arrows} alt="" className='w-2 h-3'/>
                <p className='font-medium text-[#6B7280]'>CO<sub>2</sub></p>
            </div>
            <div className='px-6 py-3 bg-[#F9FAFB] flex items-center gap-1'>
                <img src={arrows} alt="" className='w-2 h-3'/>
                <p className='font-medium text-[#6B7280]'>COSTE</p>
            </div>
        
        {
            list.map(areas => <Cell key={areas.id} prop={areas}/>)
        }
    </div>
  )
}
