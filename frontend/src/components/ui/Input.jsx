
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