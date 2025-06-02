interface LogoProps {
  variant?: "wordmark" | "icon" | "combined";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({
  variant = "combined",
  size = "md",
  className = "",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  };

  if (variant === "icon") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={`${sizeClasses[size]} w-auto ${className}`}
        aria-label="PalJS Icon"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect
          x="64"
          y="64"
          width="384"
          height="384"
          fill="url(#logoGrad)"
          rx="40"
          ry="40"
        />
        <text
          x="50%"
          y="54%"
          fontSize="300"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#ffffff"
          fontFamily="Inter, Arial, sans-serif"
          fontWeight="700"
        >
          PJ
        </text>
      </svg>
    );
  }

  if (variant === "combined") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={sizeClasses[size]}
          aria-label="PalJS Icon"
        >
          <defs>
            <linearGradient
              id="logoGradCombined"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <rect
            x="64"
            y="64"
            width="384"
            height="384"
            fill="url(#logoGradCombined)"
            rx="40"
            ry="40"
          />
          <text
            x="50%"
            y="54%"
            fontSize="300"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#ffffff"
            fontFamily="Inter, Arial, sans-serif"
            fontWeight="700"
          >
            PJ
          </text>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 150"
          className={`${sizeClasses[size]} w-auto`}
          aria-label="PalJS"
        >
          <defs>
            <linearGradient id="logoGradText" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="115"
            fontSize="110"
            fill="url(#logoGradText)"
            fontFamily="Inter, Arial, sans-serif"
            fontWeight="700"
          >
            PalJS
          </text>
        </svg>
      </div>
    );
  }

  // Default: wordmark variant
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 150"
      className={`${sizeClasses[size]} w-auto ${className}`}
      aria-label="PalJS"
    >
      <defs>
        <linearGradient id="logoGradWordmark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="115"
        fontSize="110"
        fill="url(#logoGradWordmark)"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="700"
      >
        PalJS
      </text>
    </svg>
  );
}
