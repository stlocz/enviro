import React from 'react';

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonElement = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Omit<ButtonElement, "className" | "type"> {
    children: React.ReactNode;
    className?: string;
    variant?: ButtonVariant;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = "",
    variant = "primary",
    type = "button",
    ...rest
}) => {
    const classes = ["btn", `btn--${variant}`, className].filter(Boolean).join(" ");

    return (
        <button className={classes} type={type} {...rest}>
            {children}
        </button>
    );
};

export default Button;
