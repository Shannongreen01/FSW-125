import { useState } from 'react';


function RecycledItemForm({ add, name, desc, btnText, id }) {

    const initialInput = {name: name || '', desc: desc || ''};
    const [inputs, setInputs] = useState(initialInput);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
    };

    const handleSubmit = (e) => {   
        e.preventDefault();
        add(inputs, id);
        setInputs(initialInput);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type = 'text'
                name = 'name'
                value = {inputs.name}
                onChange = {handleChange}
                placeholder = 'Name' />
            <input 
                type = 'text'
                name = 'desc'
                value = {inputs.desc}
                onChange = {handleChange}
                placeholder = 'Description' />

            <input 
                type = 'text'
                name = 'recycyclable'
                value = {inputs.recyclable}
                onChange = {handleChange}
                placeholder = 'Recyclable? true or false' />  

                <input 
                type = 'number'
                name = 'quantity'
                value = {inputs.quantity}
                onChange = {handleChange}
                placeholder = 'Quantity' />

            <input 
                type = 'number'
                name = 'ppu'
                value = {inputs.ppu}
                onChange = {handleChange}
                placeholder = 'Price Per Unit' />
                <button className = 'add'>{btnText}</button> 
        </form>
    );
}

export default RecycledItemForm;