const Button = ({ className = '', children, ...props }) => {
    return (
        <button
            className={`cursor-pointer bg-yellow-900 hover:bg-yellow-800 transition text-white rounded-full ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
