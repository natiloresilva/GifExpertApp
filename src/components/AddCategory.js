import React, { useState } from 'react'
import propTypes from 'prop-types'

export const AddCategory = ({setCategories, categories}) => {

    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       
        if(inputValue.trim().length > 2){
            //Si no mandaba las categories por props también podría haber hecho ===> 
            setCategories( cates => [ inputValue, ...cates])
            //setCategories([inputValue, ...categories])
            setInputValue('')
        }
        
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
       </form>
    )
}


AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}
