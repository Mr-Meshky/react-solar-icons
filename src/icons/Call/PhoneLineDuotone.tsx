import React, { forwardRef, SVGProps } from 'react';

interface PhoneLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const PhoneLineDuotone = forwardRef<SVGSVGElement, PhoneLineDuotoneProps>(
  ({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
        <path d="m16.1 13.359.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67M4.003 5.745c-.035-.62.255-1.178.689-1.61l1.57-1.56c.874-.87 2.348-.735 3.111.284l1.261 1.684c.617.824.55 1.952-.157 2.654l-.286.286"></path>
        <path
          d="M18.676 18.965c-1.63.152-5.614-.016-9.86-4.238-4.005-3.982-4.723-7.395-4.813-8.981M16.1 13.36s-1.082 1.076-4.037-1.863-1.872-4.014-1.872-4.014"
          opacity=".5"
        ></path>
      </svg>
    );
  },
);

PhoneLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default PhoneLineDuotone;
