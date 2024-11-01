import React, { forwardRef, SVGProps } from 'react';

interface PhoneCallingRoundedBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const PhoneCallingRoundedBroken = forwardRef<
  SVGSVGElement,
  PhoneCallingRoundedBrokenProps
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
      <path d="M14 2s2.2.2 5 3 3 5 3 5M14.207 5.536s.99.283 2.475 1.768c1.485 1.484 1.768 2.474 1.768 2.474M4.007 7.933c-.073 1.908.41 5.149 3.66 8.4a14 14 0 0 0 2.333 1.9M5.538 4.937c1.393-1.393 3.615-1.205 4.5.38l.649 1.162c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.028 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.572l1.163.649c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-.814.031-1.87-.039-3.067-.382"></path>
    </svg>
  );
});

PhoneCallingRoundedBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default PhoneCallingRoundedBroken;
