import { useEffect, useRef, useState } from 'react';

function useClickOutside() {
    const [active, setActive] = useState(false);
    const ref = useRef(null);

    function handleClickOutide(e) {
        if (ref.current && !ref.current.contains(e.target)) {
            setActive(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutide);
        
        return () => {
            window.removeEventListener('click', handleClickOutide);
        }
    }, [])

    return {
        ref,
        active,
        setActive
    };
}

export default useClickOutside;