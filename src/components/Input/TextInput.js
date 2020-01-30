import React from 'react';

const TextInput = ({errorMessage, ...props}) => (
<div>
    <input {...props}/>
    {errorMessage && <span
        className="alert alert-danger"
        role="alert">{errorMessage}</span>}
</div>

);


const SelectInput = ({errorMessage, ...props}) => {

    return (

        <div>
            <select {...props}>
                <option></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            {errorMessage && <span
                className="alert alert-danger"
                role="alert">{errorMessage}</span>}
        </div>

    );
};


export const renderInput = ({input, meta})=> {

    return  (<TextInput {...input}
                        type="text"
                        name={input.name}
                        errorMessage={meta.touched && meta.error} />);
};

export const renderInputNumber = ({input, meta})=> {

    return  (<TextInput {...input}
                        type="number"
                        name={input.name}
                        errorMessage={meta.touched && meta.error} />);
};


export const renderInputSelect = ({input, meta})=> {

    return  (<SelectInput {...input}
                          errorMessage={meta.touched && meta.error}/>);
};

