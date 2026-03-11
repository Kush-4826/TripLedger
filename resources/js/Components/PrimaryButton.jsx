export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center border-2 border-black bg-brand-yellow px-4 py-2 text-xs font-bold uppercase tracking-widest text-black shadow-neubrutalism-sm transition-all focus:outline-none hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:border-white dark:bg-brand-neonGreen dark:text-black dark:shadow-neubrutalism-dark-sm dark:hover:shadow-none ${
                    disabled && 'opacity-50'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
