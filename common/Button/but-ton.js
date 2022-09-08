import clsx from "clsx"
import React from "react"



const Button = ({
  children,
  className,
  handleUpload,
  isLoading = false,
  variant = "primary",
  type='submit',
  ...props

}) => {
  const noop = () => {}
  return (
    <button
      {...props}
      type={type}
      onClick={handleUpload ? handleUpload : noop}
      className={clsx(
        "w-full uppercase futuraMedium whitespace-pre flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50",
        {
          "text-white bg-[rgba(22,22,22,.95)] border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white":
            variant === "primary",
          "text-gray-200 bg-transparent hover:text-gray-800 border-gray-920 hover:bg-gray-100":
            variant === "secondary",
            "text-white bg-green-300 border-gray-920 hover:bg-green-500":
            variant === "success",
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button