import React from 'react'
import { CellList } from '../components/CellList'

export const CellPage = () => {
    return (
        <section className='w-screen h-[80%] flex flex-col items-center justify-center mt-20 px-9'>
            <CellList />
        </section>
    )
}
