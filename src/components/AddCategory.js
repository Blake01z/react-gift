import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputaValue, setInputaValue] = useState('');//si no le pongo nada seria undefine

    const handleInputChange = (e) =>{
        setInputaValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputaValue.trim().length > 2){
            // console.log('submit Echo')
            setCategories(cats => [inputaValue,...cats]);
            setInputaValue('');
        }

    }

    return (

        <form onSubmit={handleSubmit}>
            <h2>Add category</h2>
            <input
                type="text"
                value = {inputaValue}
                onChange={handleInputChange}
                placeholder ="Introduce un Nombre"
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
