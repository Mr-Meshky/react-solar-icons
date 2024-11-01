import React, { forwardRef, SVGProps } from 'react';

interface RoundArrowRightDownBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundArrowRightDownBold = forwardRef<
  SVGSVGElement,
  RoundArrowRightDownBoldProps
>(({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill={color}
        fill-rule="evenodd"
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M9.75 15c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69L9.53 8.47a.75.75 0 0 0-1.06 1.06l4.72 4.72H10.5a.75.75 0 0 0-.75.75"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RoundArrowRightDownBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundArrowRightDownBold;
