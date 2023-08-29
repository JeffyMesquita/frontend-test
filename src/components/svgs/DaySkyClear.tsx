export function DaySkyClear() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 318 318"
      className="w-full h-full"
      // {...props}
    >
      <rect
        width={250}
        height={250}
        x={0.931}
        y={0.931}
        fill="transparent"
        rx={94.665}
      />
      <g filter="url(#a)">
        <path
          fill="transparent"
          d="M231.542 282.134c0 2.571-32.517 4.655-72.628 4.655-40.112 0-72.629-2.084-72.629-4.655s32.517-4.656 72.629-4.656c40.111 0 72.628 2.085 72.628 4.656Z"
        />
      </g>
      <path
        fill="url(#b)"
        d="M228.19 159.1c0 38.157-30.933 69.09-69.09 69.09-38.157 0-69.09-30.933-69.09-69.09 0-38.158 30.933-69.09 69.09-69.09 38.157 0 69.09 30.932 69.09 69.09Z"
      />
      <rect
        width={315.965}
        height={315.965}
        x={0.931}
        y={0.931}
        stroke="url(#c)"
        strokeWidth={1.862}
        rx={94.665}
      />
      <defs>
        <linearGradient
          id="b"
          x1={186.932}
          x2={128.723}
          y1={96.406}
          y2={228.175}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD88B" />
          <stop offset={1} stopColor="#FFA900" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={30.467}
          x2={312.025}
          y1={38.872}
          y2={312.025}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="transparent" />
          <stop offset={1} stopColor="transparent" stopOpacity={0} />
        </linearGradient>
        <filter
          id="a"
          width={175.053}
          height={39.108}
          x={71.387}
          y={262.58}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_101_15"
            stdDeviation={7.449}
          />
        </filter>
      </defs>
    </svg>
  );
}
