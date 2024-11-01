import React, { forwardRef, SVGProps } from 'react';

interface PhoneRoundedLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const PhoneRoundedLineDuotone = forwardRef<
  SVGSVGElement,
  PhoneRoundedLineDuotoneProps
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
      <path d="M5.007 6.933C5.05 5.8 5.7 4.774 6.537 3.937c1.394-1.393 3.616-1.205 4.5.38l.65 1.162c.585 1.05.35 2.426-.572 3.349m5.952 10.166c1.133-.043 2.159-.695 2.996-1.532 1.393-1.393 1.206-3.615-.38-4.5l-1.162-.649c-1.05-.585-2.426-.35-3.349.572"></path>
      <path
        d="M5.007 6.933c-.073 1.908.41 5.149 3.66 8.4 3.251 3.25 6.492 3.733 8.4 3.66m-1.895-6.108s-1.119 1.12-3.148-.91c-2.028-2.028-.91-3.147-.91-3.147"
        opacity=".5"
      ></path>
    </svg>
  );
});

PhoneRoundedLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default PhoneRoundedLineDuotone;
