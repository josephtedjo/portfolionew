import React from "react";

export default function CustomButton({ className = "", children, ...props }
) {
  return (
    <a 
      className={className} 
      {...props}
    >
      <span className="gradient-button inline-flex items-center gap-1.5">
        {children}
      </span>
    </a>
  );
}

