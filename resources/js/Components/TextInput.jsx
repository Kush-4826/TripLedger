import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-2 border-black bg-white shadow-neubrutalism-sm focus:border-black focus:ring-0 focus:shadow-neubrutalism-md dark:border-white dark:bg-brand-darkCard dark:text-white dark:shadow-neubrutalism-dark-sm dark:focus:border-white dark:focus:shadow-neubrutalism-dark-md transition-all ' +
                className
            }
            ref={localRef}
        />
    );
});
