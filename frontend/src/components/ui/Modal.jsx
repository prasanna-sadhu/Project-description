/**
 * Modal Component
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls whether modal is visible
 * @param {function} props.onClose - Function to close the modal
 * @param {string} props.title - Title text of the modal
 * @param {React.ReactNode} props.children - Content inside the modal
 */
function Modal({
    isOpen,onClose,title,children
})
{
    if(!isOpen)
    {
        return null;
    }
    return(
        <div slassName="modal-overlay">
            <div className="modal">
                <h2>{title}</h2>
                {children}
                <button onCLick={onClose}>Close</button>
            </div>
        </div>
    );
}
export default Modal;