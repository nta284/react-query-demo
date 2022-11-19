import clsx from 'clsx';
import Portal from '../HOC/Portal';
import { useState, forwardRef, useImperativeHandle } from 'react';

const Modal = forwardRef(({
    children,
    modalStyle,
    closeOnClickOutside = true,
    active = false
}, ref) => {
    const [isOpen, setIsOpen] = useState(active);

    useImperativeHandle(ref, () => ({
        toggle: () => {
            setIsOpen(!isOpen);
        },
        open: () => {
            setIsOpen(true);
        },
        close: () => {
            setIsOpen(false);
        }
    }))

    return (
        <Portal>
            <div>
                <div
                    className={clsx(
                        'fixed inset-0 z-50 bg-black/50 duration-200 ease-out',
                        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
                    )}
                    onClick={() => {
                        if (!closeOnClickOutside) return;
                        setIsOpen(false);
                    }}
                ></div>
                <div
                    className={clsx(
                        'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white duration-200 ease-out',
                        isOpen ? 'scale-100 opacity-100 visible' : 'scale-50 opacity-0 invisible',
                        modalStyle
                    )}
                >
                    {children}
                </div>
            </div>
        </Portal>
    )
})

export default Modal;