/**
 * Toast Component
 *
 * @param {Object} props - Component props
 * @param {string} props.message - Message to display inside the toast
 */
function Toast({

message

})

{

return(

<div className="toast">

{message}

</div>

);

}

export default Toast;