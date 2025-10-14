import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    className = ''
}) => {
    const baseClasses = 'btn';
    const classes = [baseClasses, className]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
