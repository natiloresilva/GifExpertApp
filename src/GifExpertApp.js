import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = ({defaultCategories = []}) => {

    // // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    
    const [categories, setCategories] = useState(defaultCategories)

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter'])
    //     //También podemos utilizar un callback en el que recibe como argumento el estado anterior y devuelve un nuevo estado
    //     //setCategories( cates => [...cates, 'HunterXHunter']) }

    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} categories={categories}/>
            <hr />

            <ol>
                {
                    categories?.map(category => (
                        <GifGrid
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
        
        </>
    )
}
