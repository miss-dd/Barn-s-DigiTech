import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'mark';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'light',
  size = 'md'
}) => {
  const isDark = theme === 'dark';
  const navyColor = isDark ? '#FFFFFF' : '#0B192C';
  const blueColor = '#0066FF';
  const textColor = isDark ? '#F1F5F9' : '#0B192C';
  const subtextColor = isDark ? '#94A3B8' : '#334155';

  const sizeDimensions = {
    sm: { height: 32, markSize: 32 },
    md: { height: 44, markSize: 42 },
    lg: { height: 56, markSize: 54 },
    xl: { height: 72, markSize: 70 }
  }[size];

  // The Exact Emblem from the uploaded logo image:
  // Bold navy 'B', overlapping vibrant blue shopping cart with pixel blocks on left and swoosh extending right
  const Emblem = ({ width = 48, height = 48 }: { width?: number; height?: number }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-xs"
    >
      {/* Background Bold Navy Letter 'B' */}
      <path
        d="M38 18 H92 C115 18 132 28 132 50 C132 63 124 73 111 78 C128 83 138 96 138 114 C138 138 118 148 92 148 H38 V18 Z 
           M64 42 V68 H88 C98 68 106 63 106 55 C106 47 98 42 88 42 H64 Z 
           M64 92 V124 H92 C103 124 112 118 112 108 C112 98 103 92 92 92 H64 Z"
        fill={isDark ? '#1E293B' : '#0B192C'}
      />

      {/* Tech Digital Pixels (Left of the shopping cart handle) */}
      <rect x="22" y="58" width="12" height="12" rx="1.5" fill={blueColor} />
      <rect x="36" y="58" width="12" height="12" rx="1.5" fill={blueColor} />
      <rect x="29" y="72" width="12" height="12" rx="1.5" fill={blueColor} />
      <rect x="43" y="72" width="12" height="12" rx="1.5" fill={blueColor} />

      {/* Shopping Cart Handle connecting to pixels */}
      <path
        d="M48 78 L60 78 L74 116 H114"
        stroke={blueColor}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Shopping Cart Basket Body */}
      <polygon
        points="65,82 118,82 108,112 76,112"
        fill="#FFFFFF"
        stroke={blueColor}
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Front Dynamic Swoosh extending around the 'B' */}
      <path
        d="M106 112 C122 106 136 94 144 76 C147 68 148 60 144 54 C141 50 134 52 136 60 C138 69 130 84 114 96"
        fill={blueColor}
      />

      {/* Shopping Cart Wheels */}
      <circle cx="82" cy="122" r="7" fill="#FFFFFF" stroke={blueColor} strokeWidth="4" />
      <circle cx="106" cy="122" r="7" fill="#FFFFFF" stroke={blueColor} strokeWidth="4" />
      <circle cx="82" cy="122" r="2.5" fill={blueColor} />
      <circle cx="106" cy="122" r="2.5" fill={blueColor} />
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Emblem width={sizeDimensions.markSize} height={sizeDimensions.markSize} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <Emblem width={sizeDimensions.markSize * 1.5} height={sizeDimensions.markSize * 1.5} />
        <div className="mt-2.5">
          <div className="text-2xl font-black tracking-tight leading-none">
            <span style={{ color: textColor }}>Barn's </span>
            <span style={{ color: blueColor }}>DigiTech</span>
          </div>
          <div
            className="text-[10px] font-bold tracking-[0.22em] uppercase mt-1.5 flex items-center justify-center gap-1.5"
            style={{ color: subtextColor }}
          >
            <span>SMART DEVICES</span>
            <span className="w-1 h-1 rounded-full bg-[#0066FF]"></span>
            <span>BETTER LIVING</span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Horizontal layout (Emblem on left, text on right)
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <Emblem width={sizeDimensions.markSize} height={sizeDimensions.markSize} />
      <div className="flex flex-col justify-center leading-none">
        <div className="text-lg sm:text-xl font-black tracking-tight leading-none">
          <span style={{ color: textColor }}>Barn's </span>
          <span style={{ color: blueColor }}>DigiTech</span>
        </div>
        <div
          className="text-[9px] sm:text-[10px] font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase mt-1 leading-none flex items-center gap-1"
          style={{ color: subtextColor }}
        >
          <span>SMART DEVICES</span>
          <span className="w-1 h-1 rounded-full bg-[#0066FF]"></span>
          <span>BETTER LIVING</span>
        </div>
      </div>
    </div>
  );
};
