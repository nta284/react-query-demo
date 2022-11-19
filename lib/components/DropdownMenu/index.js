import useClickOutside from '@lib/hooks/useClickOutside';

export function DropdownMenu({
    toggleComponent,
    dropdownComponent,
    dropdownStyle,
    transitionProperty,
    transitionType,
    toggleEvent = "click",
    blurOnClick = true
}) {
    const { ref: dropdown, active: isDropdownToggle, setActive: setIsDropdownToggle } = useClickOutside();

    const transformConvert = () => {
        switch (transitionType) {
            case "zoomIn":
                return isDropdownToggle ? 'scale(1)' : 'scale(0.9)';
                
            case "scaleY":
                return isDropdownToggle ? 'scaleY(1)' : 'scaleY(0)';

            case "slideDown":
                return isDropdownToggle ? 'translateY(0)' : 'translateY(-10px)';

            default:
                return null;
        }
    }

    return (
        <div
            ref={dropdown}
            className='relative'
            onMouseEnter={() => {
                if (toggleEvent !== "hover") return;
                setIsDropdownToggle(true);
            }}
            onMouseLeave={() => {
                if (toggleEvent !== "hover") return;
                setIsDropdownToggle(false);
            }}
        >
            <div
                onClick={() => {
                    if (toggleEvent !== "click") return;
                    setIsDropdownToggle(!isDropdownToggle);
                }}
            >
                {toggleComponent}
            </div>
            <div
                style={{
                    position: 'absolute',
                    zIndex: 50,
                    top: dropdownStyle.top ?? '120%',
                    right: dropdownStyle.right ?? 'auto',
                    left: dropdownStyle.left ?? 'auto',
                    transitionDuration: `${transitionProperty.transitionDuration ?? 100}ms`,
                    transitionTimingFunction: transitionProperty.transitionTimingFunction ?? 'ease-in-out',
                    transformOrigin: transitionProperty.transformOrigin ?? 'top',
                    transform: transformConvert(),
                    opacity: isDropdownToggle ? '1' : '0',
                    visibility: isDropdownToggle ? 'visible' : 'hidden'
                }}
                onClick={() => {
                    if (!blurOnClick) return;
                    setIsDropdownToggle(false);
                }}
            >
                {dropdownComponent}
            </div>
            <div style={{
                position: 'absolute',
                zIndex: 10,
                opacity: '0',
                width: '100%',
                top: '100%',
                height: `calc(${dropdownStyle.top} - 100%)`,
                visibility: isDropdownToggle ? 'visible' : 'hidden'
            }}></div>
        </div>
    )
}