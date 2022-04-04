import { useState } from 'react'

export const useForm = ( initialState = {} ) => {
   
    const [values, setValues] = useState(initialState);

    //metodo reste para limpiar el formulario
    const reset = () => {
       setValues(initialState) 
    }

    //función handle para manejar los eventos, igual a la de SimpleForm
    const handleInputChange = ( { target } ) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [ values, handleInputChange, reset ]
}
