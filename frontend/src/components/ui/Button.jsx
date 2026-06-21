/**
 * Button Component
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content inside the button
 * @param {string} [props.variant="primary"] - Button style variant (e.g., primary, secondary)
 * @param {string} [props.size="md"] - Button size (e.g., sm, md, lg)
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {function} props.onClick - Function called when button is clicked
 */
function Button(
    {
        children,variant="primary",
        size="md",
        disabled=false,
        onClick
    }
){
    return(
        <button 
        className="btn"
        disabled={disabled}
        onClick={onClick}>{children}</button>
    );
}
export default Button;