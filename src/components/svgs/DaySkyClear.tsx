export function DaySkyClear() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 246 258"
      className="w-full h-full"
      // {...props}
    >
      <g filter="transparent">
        <path
          fill="#FA9E42"
          d="M124.446 253.754c64.578 0 116.928-52.616 116.928-117.521s-52.35-117.52-116.928-117.52S7.518 71.327 7.518 136.232s52.35 117.521 116.928 117.521Z"
        />
        <g filter="url(#a)">
          <path
            fill="#F8E36F"
            d="M115.997 119.521c38.861-20.641 60.597-55.763 48.548-78.447-12.049-22.685-53.319-24.341-92.18-3.7-38.862 20.64-60.598 55.763-48.549 78.447 12.049 22.684 53.32 24.341 92.181 3.7Z"
          />
        </g>
      </g>
      <defs>
        <filter
          id="a"
          width={187.377}
          height={151.065}
          x={0.492}
          y={2.915}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_7_8695"
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
}
