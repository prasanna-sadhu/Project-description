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