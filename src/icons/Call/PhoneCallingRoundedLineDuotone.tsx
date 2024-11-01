import React, { forwardRef, SVGProps } from 'react';

interface PhoneCallingRoundedLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const PhoneCallingRoundedLineDuotone = forwardRef<
  SVGSVGElement,
  PhoneCallingRoundedLineDuotoneProps
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
      <path d="M14 2s2.2.2 5 3 3 5 3 5M14.207 5.536s.99.283 2.475 1.768c1.485 1.484 1.768 2.474 1.768 2.474"></path>
      <path
        d="m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.028 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.572l1.163.649c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.205 4.5.38"
        opacity=".5"
      ></path>
    </svg>
  );
});

PhoneCallingRoundedLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default PhoneCallingRoundedLineDuotone;
