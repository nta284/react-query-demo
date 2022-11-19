import { forwardRef, useImperativeHandle } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Portal from '../HOC/Portal';

const Toast = forwardRef(({ position, autoClose }, ref) => {
    useImperativeHandle(ref, () => ({
        handleToastAction: (action, message) => {
            toast[action](message);
        }
    }))

    return (
        <Portal>
            <ToastContainer
                position={position}
                autoClose={autoClose}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Portal>
    );
})

export default Toast;