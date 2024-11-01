import React, { forwardRef, SVGProps } from 'react';

interface UploadMinimalisticBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UploadMinimalisticBroken = forwardRef<
  SVGSVGElement,
  UploadMinimalisticBrokenProps
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
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15m18 0c0 2.828 0 4.243-.879 5.121-.3.3-.662.498-1.121.628M12 16V3m0 0 4 4.375M12 3 8 7.375"
      ></path>
    </svg>
  );
});

UploadMinimalisticBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UploadMinimalisticBroken;
