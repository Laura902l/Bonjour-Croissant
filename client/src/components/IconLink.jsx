import { Link } from 'react-router-dom'

const VARIANTS = {
    solid: 'bg-yellow-900 hover:bg-yellow-800 text-white shadow-lg',
    outline: 'border border-yellow-100 text-yellow-100 hover:bg-yellow-100 hover:text-yellow-900 shadow-md',
}

const IconLink = ({ to, icon, variant = 'solid', className = '', children }) => {
    return (
        <Link
            to={to}
            className={`group flex items-center gap-2 px-8 py-3 rounded transition ${VARIANTS[variant]} ${className}`}
        >
            {children}
            {icon && (
                <img
                    className="transition group-hover:translate-x-1"
                    src={icon}
                    alt=""
                />
            )}
        </Link>
    )
}

export default IconLink
