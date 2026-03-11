export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center border-2 border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-black shadow-neubrutalism-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus:ring-0 disabled:opacity-50 dark:border-white dark:bg-black dark:text-white dark:shadow-neubrutalism-dark-sm dark:hover:shadow-none ${
                    disabled && 'opacity-50'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
