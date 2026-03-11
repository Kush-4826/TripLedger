export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-bold uppercase tracking-wide text-black dark:text-white ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
