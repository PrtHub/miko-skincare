import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "apple";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-full gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-full gap-2",
    lg: "px-6 py-3.5 text-base rounded-full gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#241E19] text-[#FBF7F2] hover:bg-[#383028] active:bg-[#1A1612] shadow-sm",
    apple:
      "bg-[#241E19] text-[#FBF7F2] hover:bg-[#151210] active:scale-[0.98] shadow-md border border-[#383028]",
    secondary:
      "bg-[#FFFFFF] text-[#241E19] border border-[#EFE7DC] hover:border-[#DFD5C6] hover:bg-[#FAF6F0] shadow-sm",
    ghost:
      "text-[#554C43] hover:text-[#241E19] hover:bg-[#F2EBE1]/60",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

// Specialized App Store Button with Apple icon
export function AppStoreButton({
  className = "",
  size = "lg",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Button
      variant="apple"
      size={size}
      href="#download"
      className={`font-sans font-medium tracking-tight ${className}`}
      icon={
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.71-.93 2.73 1.01.08 2.01-.48 2.63-1.23z" />
        </svg>
      }
    >
      <div className="flex flex-col items-start leading-none text-left">
        <span className="text-[10px] uppercase tracking-wider text-[#A2988B] font-mono">
          Download on the
        </span>
        <span className="text-sm font-semibold tracking-normal text-[#FBF7F2]">
          App Store
        </span>
      </div>
    </Button>
  );
}
