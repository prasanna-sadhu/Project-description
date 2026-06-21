
/**
 * Input Component
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Label text for the input field
 * @param {string} props.placeholder - Placeholder text inside the input
 * @param {string} [props.type="text"] - Type of input (text, password, email, etc.)
 * @param {string} props.value - Controlled input value
 * @param {function} props.onChange - Function called when input value changes
 * @param {string} [props.error] - Error message to display below input (optional)
 */
function Input({

label,

placeholder,

type="text",

value,

onChange,

error

})

{

return(

<div className="input-group">

<label>{label}</label>

<input

type={type}

placeholder={placeholder}

value={value}

onChange={onChange}

/>

{error &&

<small>{error}</small>

}

</div>

);

}

export default Input;