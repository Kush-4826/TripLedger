export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'border-2 border-black bg-white text-black focus:border-black focus:ring-0 dark:border-white dark:bg-black dark:focus:border-white ' +
                className
            }
        />
    );
}
