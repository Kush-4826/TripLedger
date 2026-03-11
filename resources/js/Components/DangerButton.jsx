export default function DangerButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center border-2 border-black bg-brand-red px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-neubrutalism-sm transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus:outline-none focus:ring-0 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-white dark:shadow-neubrutalism-dark-sm dark:hover:shadow-none ${
                    disabled && 'opacity-50'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
