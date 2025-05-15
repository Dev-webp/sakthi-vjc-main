import React from "react";
import clsx from "clsx";

const Button = ({ href, children, className, ...props }) => {
  return href ? (
    <a href={href} className={clsx("button-class", className)} {...props}>
      {children}
    </a>
  ) : (
    <button className={clsx("button-class", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
