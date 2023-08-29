export function Fog() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 261 168"
      className="w-full h-full"
      // {...props}
    >
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={16}
        filter="transparent"
      >
        <path d="M248.92 56.982s-13.689 9.144-24.388 8.842c-13.411-.388-15.708-8.356-28.136-8.842-13.007.096-14.335 8.362-28.434 8.842-12.632-.112-17.987-8.692-30.025-8.842-12.038-.15-24.878 8.842-24.878 8.842M208.919 12.003s-15.772 13.236-28.1 12.8c-15.452-.562-18.1-12.1-32.417-12.8-14.987.139-16.516 12.1-32.761 12.8-14.554-.161-20.72-12.582-34.594-12.8-13.874-.218-28.663 12.8-28.663 12.8M157.919 98.003s-14.7 13.236-26.193 12.8c-14.4-.562-16.871-12.1-30.218-12.8-13.97.139-15.4 12.1-30.539 12.8-13.566-.163-19.314-12.583-32.25-12.8-12.936-.217-26.719 12.8-26.719 12.8M241.92 143.003s-15.194 13.236-27.068 12.799c-14.886-.562-17.435-12.1-31.228-12.8-14.437.139-15.911 12.1-31.56 12.8-14.022-.162-19.961-12.582-33.322-12.799-13.361-.217-27.612 12.8-27.612 12.8" />
      </g>
      <defs>
        <filter
          id="a"
          width={260.921}
          height={167.812}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_7_8751"
            stdDeviation={2}
          />
        </filter>
      </defs>
    </svg>
  );
}
