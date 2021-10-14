import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from '../components/GifGridItem'
import PropTypes from 'prop-types'

export const GifGrid = ({category}) => {

    //Renombramos Data en la desestructuración
    const {data:images, loading} = useFetchGifs(category)

    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>

        {loading && <p className='animate__animated animate__flash'>Loading ...</p>}
            <div className='card-grid'>
               {
                images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))
                }
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

