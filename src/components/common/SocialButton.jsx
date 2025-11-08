import React from "react";

const SocialButton = ({ icon: Icon, href, label, variant = "light" }) => {
  const variants = {
    light: "bg-white text-gray-700 hover:shadow-xl",
    dark: "bg-gray-800 text-white hover:bg-gray-700",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`p-3 rounded-full shadow-md transform hover:-translate-y-1 transition-all duration-200 ${variants[variant]}`}
    >
      <Icon size={20} />
    </a>
  );
};

export default SocialButton;
