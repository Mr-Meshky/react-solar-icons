import React, { forwardRef, SVGProps } from 'react';

interface CallCancelRoundedBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CallCancelRoundedBold = forwardRef<
  SVGSVGElement,
  CallCancelRoundedBoldProps
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
        fill-rule="evenodd"
        d="M15.47 3.47a.75.75 0 0 1 1.06 0L18 4.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L19.06 6l1.47 1.47a.75.75 0 0 1-1.06 1.06L18 7.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L16.94 6l-1.47-1.47a.75.75 0 0 1 0-1.06"
        clip-rule="evenodd"
      ></path>
      <path d="m10.038 5.316.649 1.163c.585 1.05.35 2.426-.572 3.349 0 0-1.12 1.119.91 3.148 2.027 2.027 3.146.91 3.147.91.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5-.837.836-1.863 1.488-2.996 1.53-1.908.073-5.149-.41-8.4-3.66-3.25-3.251-3.733-6.492-3.66-8.4.043-1.133.694-2.159 1.53-2.996 1.394-1.393 3.616-1.206 4.5.38"></path>
    </svg>
  );
});

CallCancelRoundedBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CallCancelRoundedBold;
