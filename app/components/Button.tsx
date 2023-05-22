'use client'
import React from "react";
import { IconType } from "react-icons";

type Props = {
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};

const Button = ({ label, onClick, disabled, outline, small, icon:Icon }: Props) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition duration-500 w-full 
      ${outline ? "bg-white" : "bg-rose-500"} ${outline ? "border-black" : "bg-rose-500"} ${outline ? "text-black" : "text-white"} 
      ${small ? 'p-1' : 'p-3'} ${small ? 'text-sm' : 'text-base'} ${small ? 'text-light' : 'text-semibold'} ${small ? 'border-[1px]' : 'border-2'}`}
    >
        {Icon && (
            <Icon
            size={24}
            className="absolute left-4 top-3"
            />
        )}
      {label}
    </button>
  );
};

export default Button;
