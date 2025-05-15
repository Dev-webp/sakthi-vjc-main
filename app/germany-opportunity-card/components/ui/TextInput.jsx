import React, { useId } from "react";

function TextInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  autoComplete,
  className = "",
  required = false,
  pattern,
  inputMode,
  maxLength,
  minLength,
  autoFocus = false,
  disabled = false,
}) {
  const id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder=" "
        required={required}
        pattern={pattern}
        inputMode={inputMode}
        maxLength={maxLength}
        minLength={minLength}
        autoFocus={autoFocus}
        disabled={disabled}
        aria-required={required}
        aria-invalid={pattern && !new RegExp(pattern).test(value) ? "true" : "false"}
        className={`peer block w-full border-b border-neutral-300 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0 caret-blue-600 ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.2)' }}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 top-1/2 -mt-2 origin-left text-sm text-neutral-500 transition-all duration-200 transform
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-normal peer-placeholder-shown:text-neutral-500 
          peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950
          ${value ? '-translate-y-4 scale-75 font-semibold text-neutral-950' : ''}`}
      >
        {label}
      </label>
    </div>
  );
}

export default TextInput;
