import React, { ComponentProps, FC } from "react";

type Props = {};

const Button: FC<ComponentProps<"button">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${className} text-white bg-[#FF922C] rounded-full text-[13px] font-[700] leading-normal`}
    >
      {children}
    </button>
  );
};

export default Button;
