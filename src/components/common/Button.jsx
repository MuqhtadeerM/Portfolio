import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  className = "",
  icon: Icon,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline:
      "border-2 border-gray-300 text-gray-700 px-6 py-3 hover:border-primary-600 hover:text-primary-600",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon size={20} />}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
