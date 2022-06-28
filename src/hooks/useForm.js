import { useState } from "react";

useState

export const useForm = (initialForm = {}) => {


    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,  //desestructuramos para mantener valores del formulario
            [name]: value
        }) //[ ] la propiedad dentro de las llaves es la que se va a desestructurar. y el valor es el nuevo value enviado desde el input
    };

    const onReset =() => {
    setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onReset,
    }


}
