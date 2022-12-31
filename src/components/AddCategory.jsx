import { useState } from "react"

export const AddCategory = ({ onNewValue }) => {
  
    const [inputValue, setInputValue] = useState('');
    

    const onInputChange = ( {target} ) => {
        setInputValue( target.value );
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const inputValueTrim = inputValue.trim();
        if( inputValueTrim <= 1 ) return;
        onNewValue( inputValueTrim );
        setInputValue('');

    }

    return (
        <form onSubmit={ onSubmit } >
            <input 
                type='text'
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />

        </form>
)
}
